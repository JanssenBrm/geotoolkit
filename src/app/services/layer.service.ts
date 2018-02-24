import { Injectable } from '@angular/core';
import {BACKGROUND_LAYERS} from "../config/backgroundlayers.config";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LayerService {

  constructor() { }

  getLayers(){
    return this.getBackgroundLayers();
  }

  getBackgroundLayers(){
    return BACKGROUND_LAYERS;
  }
}
