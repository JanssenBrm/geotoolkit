import { Component, OnInit } from '@angular/core';
import {select} from "@angular-redux/store";
import {NgRedux} from "@angular-redux/store/lib/src/components/ng-redux";
import {IAppState} from "../../../reducers/root.reducer";
import {LayerActions} from "../../../actions/layers.action";
import {LayerService} from "../../../services/layer.service";
import {UIActions} from "../../../actions/ui.action";
import {SOURCES} from "../../../config/sources.config";

@Component({
  selector: 'app-layerselection',
  templateUrl: './layerselection.component.html',
  styleUrls: ['./layerselection.component.scss']
})
export class LayerselectionComponent implements OnInit {

  @select() layers;

  constructor(private ngRedux: NgRedux<IAppState>, private layerService: LayerService) { }

  backgroundLayers: any[];
  layerInfo: any[];
  sources: any[];
  status: string;
  searchFilter: string;

  ngOnInit() {
    this.status = '';
    this.searchFilter = '';
    this.sources = SOURCES;
    this.layers.subscribe(state =>{
      this.backgroundLayers =  state.backgroundLayers;
      this.layerInfo = state.layers;

      this.ngRedux.dispatch({
        type: UIActions.SET_CALENDAR_DATES,
        body: {
          times: state.times
        }
      });

    });
  }

  selectBackgroundLayer(layer : any){
    this.ngRedux.dispatch({
      type: LayerActions.SELECT_BACKGROUND_LAYER,
      body: layer
    })
  }

  addSource(event: any){
    this.status = "Loading source";
    const source = this.sources.find(source => source.name === event);

    this.layerService.loadExternalLayers(source.url).subscribe(layers => {
      this.status = "";
      this.ngRedux.dispatch({
        type: LayerActions.ADD_LAYERS,
        body: {
          name: source.name,
          description: source.description,
          url: source.url,
          infoUrl: source.infoUrl,
          imageUrl: source.imageUrl,
          layers: layers
        }
      });
    },error => {
      this.status = `An error occurred - ${error.message}`;
    });

    event.value = "";

  }

  loadExternalSource(event: any){
    this.status = "Loading external source";
    const url = event.value;
    this.layerService.loadExternalLayers(url).subscribe(layers => {
      this.status = "";
      this.ngRedux.dispatch({
        type: LayerActions.ADD_LAYERS,
        body: {
          url: url,
          layers: layers
        }
      });
    },
      error => {
          this.status = `An error occurred - ${error.message}`;
      });

    event.value = "";
  }

  toggleLayer(layer: any){
    this.ngRedux.dispatch({
      type: LayerActions.TOGGLE_LAYER,
      body: {
        layer: layer
      }
    });
  }


}
