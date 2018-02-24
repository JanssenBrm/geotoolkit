import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as ol from 'openlayers';
import {select} from "@angular-redux/store";

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

  constructor() { }



  ngOnInit() {

    this.zoom = this.zoom || 4;
    this.initMap();

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  initMap(){
    let extent = ol.proj.transformExtent(this.extent, /* WGS84 */ 'EPSG:4326', /* MERCATOR */ 'EPSG:3857');
    let center = ol.extent.getCenter(extent);

    this.map = new ol.Map({
      layers: [],
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
  }
  setBackgroundLayers(){

    this.backgroundLayers.forEach(layer =>{
        this.map.addLayer(layer.layer);
    })

  }


}
