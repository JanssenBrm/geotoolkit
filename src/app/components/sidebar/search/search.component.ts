import {Component, OnInit, Input, ElementRef, HostListener} from '@angular/core';
import {MapboxService} from "../../../services/mapbox.service";
import {LayerActions} from "../../../actions/layers.action";
import {NgRedux} from "@angular-redux/store/lib/src/components/ng-redux";
import {IAppState} from "../../../reducers/root.reducer";
import * as ol from 'openlayers';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  selectedTerm: string;
  items: any[];
  showList: boolean;

  constructor(private _eref: ElementRef, private mapboxService: MapboxService, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.items = [];
  }


  @HostListener('window:click', ['$event']) onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.showList = false;
    }
  }

  zoomToResult(feature: any) {
    this.ngRedux.dispatch({
      type: LayerActions.SET_ACTIVE_FEATURE,
      body:{
        feature: new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform(feature.geometry.coordinates, 'EPSG:4326', 'EPSG:3857')),
          name: feature.text
        })
      }
    })
    this.selectedTerm = feature.place_name;
    this.items = [];
    this.showList = false;
  }

  toggleList() {
    if (this.items.length > 0 && !this.showList) {
      this.showList = true;
    }
  }

  searchLocation(){

    if(!this.selectedTerm || this.selectedTerm === '')
    {
      this.items = [];
      this.showList = false;
    }else{
      this.mapboxService.search(this.selectedTerm).subscribe(items => {
        this.items = (<any> items).features;
        this.showList = true;
      }, err => {
        this.items = [];
        this.showList = false;
      });
    }
  }
}
