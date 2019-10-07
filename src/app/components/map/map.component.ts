import {Component, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as ol from 'openlayers';
import {select} from "@angular-redux/store";
import {IAppState} from "../../reducers/root.reducer";
import {NgRedux} from "@angular-redux/store/lib/src/components/ng-redux";
import {LayerState} from "../../reducers/layer.reducer";
import {LayerActions} from "../../actions/layers.action";
import {MapboxService} from "../../services/mapbox.service";
import {UIActions} from "../../actions/ui.action";
import {ToolBoxActions} from "../../actions/toolbox.action";
import {UtilService} from "../../services/util.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {

  map: any;

  @Input()
  extent: number[];

  @Input()
  zoom: number;

  @Input()
  backgroundLayers: any[];

  @Input()
  layers: any[];

  @Input()
  viewExtent: number[];

  @Input()
  interaction: string;

  @Input()
  activeFeature: any;

  @Input()
  features: any[];

  constructor( private ngRedux: NgRedux<IAppState>, private mapboxService: MapboxService, private utilService: UtilService) { }

  interactions: any[];
  vectorLayer: any;

  measureTooltipElement: any;
  measureTooltip: any;


  ngOnInit() {

    this.zoom = this.zoom || 4;
    this.initMap();

  }

  ngOnChanges(changes: SimpleChanges): void {

    let newLayers = [];
    if(changes.layers && !changes.layers.isFirstChange()){
       changes.layers.currentValue.forEach( layerInfo => {
           const hit = changes.layers.previousValue.find(prevLayerInfo => prevLayerInfo.url === layerInfo.url);

           if (!hit) {
             newLayers.push(layerInfo);
           }
         }
       );
       this.addLayers(newLayers);
    }

    if(changes.interaction && !changes.interaction.isFirstChange()){
      this.removeInteraction(changes.interaction.previousValue);
      this.addInteraction(changes.interaction.currentValue);
      if(this.interaction == ''){
        this.stopDrawing();
      }
    }

    if(changes.viewExtent && !changes.viewExtent.isFirstChange()){
      this.zoomToExtent(this.viewExtent);
    }

    if(changes.features && !changes.features.isFirstChange()){
      this.vectorLayer.getSource().clear();
      this.vectorLayer.getSource().addFeatures(this.features);
    }

    if(changes.activeFeature && !changes.activeFeature.isFirstChange() && changes.activeFeature.previousValue !== changes.activeFeature.currentValue){
      this.zoomToExtent(this.activeFeature.getGeometry().getExtent());
    }

  }


  initMap(){
    let extent = ol.proj.transformExtent(this.extent, /* WGS84 */ 'EPSG:4326', /* MERCATOR */ 'EPSG:3857');
    let center = ol.extent.getCenter(extent);

    this.vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({features: this.features, wrapX: false}),
      zIndex: 99
    });


    this.map = new ol.Map({
      layers: [this.vectorLayer],
      maxTilesLoading: 128,
      controls: ol.control.defaults({
        attribution: false,
        rotate: false
      }).extend([
        new ol.control.ZoomToExtent({
          extent: extent
        }),
        new ol.control.ScaleLine()
      ]),
      view: new ol.View({
        projection: 'EPSG:3857',
        center: center,
        zoom: this.zoom
      }),
      target: 'map'
    });

    const redux = this.ngRedux
    this.map.on('movestart', function(event) {
      redux.dispatch({
        type: UIActions.RESET_PROGRESS,
        body:{
        }
      })
    });

    this.setBackgroundLayers();
    this.initInteractions();
  }
  setBackgroundLayers(){

    this.backgroundLayers.forEach(layer =>{
        this.map.addLayer(layer.layer);
    })

  }

  initInteractions(){

    this.interactions = [];
    this.interactions.push({
      type: 'bbox',
      interaction: new ol.interaction.Draw({
        source: this.vectorLayer.getSource(),
        type: 'Circle',
        geometryFunction: ol.interaction.Draw.createBox()
      })
    });

    this.interactions.push({
      type: 'polygon',
      interaction:   new ol.interaction.Draw({
        source: this.vectorLayer.getSource(),
        type: 'Polygon'
      })
    });

    this.interactions.push({
      type: 'point',
      interaction:   new ol.interaction.Draw({
        source: this.vectorLayer.getSource(),
        type: 'Point'
      })
    });

    this.interactions.push({
      type: 'circle',
      interaction:   new ol.interaction.Draw({
        source: this.vectorLayer.getSource(),
        type: 'Circle'
      })
    });

    let listener;



    this.interactions.forEach(interaction =>{
      interaction.interaction.on('drawend', feature => {
        this.drawEnd(feature.feature);
      });
      interaction.interaction.on('drawstart', event => {

        const feature = event.feature;

        if(!this.measureTooltipElement)
        {
          this.createMeasureTooltip();
        }

        listener = feature.getGeometry().on('change', function(evt) {
          let geom = evt.target;
          let output;
          let tooltipCoord;
          if (geom instanceof ol.geom.Polygon) {
            output = `<table><tr><th>Area:</th><td>${this.utilService.formatArea(geom)}</td></tr><tr><th>Perimeter:</th><td>${this.utilService.formatLength(new ol.geom.LineString(geom.getLinearRing(0).getCoordinates()))}</td></tr></table>`;
            tooltipCoord = geom.getInteriorPoint().getCoordinates();
          } else if (geom instanceof ol.geom.LineString) {
            output = `<table><tr><th>Distance:</th><td>${this.utilService.formatLength(geom)}</td></tr></table>`;
            tooltipCoord = geom.getLastCoordinate();
          } else if (geom instanceof ol.geom.Circle) {
            output = `<table><tr><th>Radius:</th><td>${this.utilService.formatRadius(geom)}</td></tr><tr><th>Area:</th><td>${this.utilService.formatCircleArea(geom)}</td></tr></table>`;
            tooltipCoord = geom.getCenter();
          }
          this.measureTooltipElement.innerHTML = output;
          this.measureTooltip.setPosition(tooltipCoord);
        }, this);

      }, this);
    });
  }

  createMeasureTooltip() {
    if (this.measureTooltipElement) {
      this.measureTooltipElement.parentNode.removeChild(this.measureTooltipElement);
    }
    this.measureTooltipElement = document.createElement('div');
    this.measureTooltipElement.className = 'tooltip tooltip-measure';
    this.measureTooltip = new ol.Overlay({
      element: this.measureTooltipElement,
      offset: [0, -15],
      positioning: 'bottom-center',
      stopEvent: false
    });
    this.map.addOverlay(this.measureTooltip);
  }

  drawEnd(feature: any){

    if(this.interaction == 'point'){
      let coordinates = feature.getGeometry().getCoordinates();
      coordinates = ol.proj.transform(coordinates, 'EPSG:3857', 'EPSG:4326');
      this.mapboxService.reverseGeocode(coordinates[0], coordinates[1]).subscribe(data =>{
         let address = {};

        data['features'].forEach(feature => {
          address[this.capitalizeFirstLetter(feature.place_type[0])] = feature.place_name;
        });

        feature.setProperties({'Address': address});

      })
    }

    this.ngRedux.dispatch({
      type: LayerActions.ADD_FEATURE,
      body:{
        feature: feature,
        type: this.interaction
      }
    })
  }

  @HostListener('document:keydown', ['$event'])
  stopActionKey(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.stopDrawing();
    }
  }


  stopDrawing(){

    this.map.removeOverlay(this.measureTooltip);
    this.measureTooltipElement = null;

    this.ngRedux.dispatch({
      type: ToolBoxActions.STOP_ACTION,
      body:{
      }
    })
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  removeInteraction(type: string){

    if(type !== null && type !== ''){
      const interaction = this.interactions.find(interaction => interaction.type === type);
      if(interaction)
        this.map.removeInteraction(interaction.interaction);
    }
  }

  addInteraction(type: string){

    if(type !== null && type !== '') {
      const interaction = this.interactions.find(interaction => interaction.type === type);
      if(interaction)
        this.map.addInteraction(interaction.interaction);
    }
  }
  zoomToExtent(extent: number[]){
    if(extent != null)
      this.map.getView().fit(extent, {size: this.map.getSize(), maxZoom: 16});
  }



  addLayers(layers: any[]){
    layers.forEach(layerInfo => {
      layerInfo.layers.forEach(layer => {
        this.map.addLayer(layer.layer);
      })
    });
  }


}
