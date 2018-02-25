import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as ol from 'openlayers';
import {select} from "@angular-redux/store";
import {IAppState} from "../../reducers/root.reducer";
import {NgRedux} from "@angular-redux/store/lib/src/components/ng-redux";
import {LayerState} from "../../reducers/layer.reducer";
import {LayerActions} from "../../actions/layers.action";

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

  constructor( private ngRedux: NgRedux<IAppState>) { }

  interactions: any[];
  vectorLayer: any;


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
    }

    if(changes.viewExten && !changes.viewExtent.isFirstChange()){
      this.zoomToExtent(this.viewExtent);
    }

  }


  initMap(){
    let extent = ol.proj.transformExtent(this.extent, /* WGS84 */ 'EPSG:4326', /* MERCATOR */ 'EPSG:3857');
    let center = ol.extent.getCenter(extent);

    this.vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({wrapX: false}),
      zIndex: 99
    });

    this.map = new ol.Map({
      layers: [this.vectorLayer],
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

    this.interactions.forEach(interaction =>{
      interaction.interaction.on('drawend', feature => {
        this.drawEnd(feature.feature);
      })
    });
  }

  drawEnd(feature: any){
    console.log(feature);
    this.ngRedux.dispatch({
      type: LayerActions.ADD_FEATURE,
      body:{
        feature: feature,
        type: this.interaction
      }
    })
  }

  removeInteraction(type: string){
    if(type !== null && type !== ''){
      this.map.removeInteraction(this.interactions.find(interaction => interaction.type === type).interaction);
    }
  }

  addInteraction(type: string){
    if(type !== null && type !== '') {
      this.map.addInteraction(this.interactions.find(interaction => interaction.type === type).interaction);
    }
  }
  zoomToExtent(extent: number[]){
    if(extent != null)
      this.map.getView().fit(extent, this.map.getSize());
  }

  addLayers(layers: any[]){
    layers.forEach(layerInfo => {
      layerInfo.layers.forEach(layer => {
        this.map.addLayer(layer.layer);
      })
    });
  }


}
