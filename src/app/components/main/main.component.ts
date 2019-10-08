import { Component, OnInit } from '@angular/core';
import {select} from "@angular-redux/store";
import {LayerActions} from "../../actions/layers.action";
import {Observable} from "rxjs";
import {LayerService} from "../../services/layer.service";
import {NgRedux} from "@angular-redux/store/lib/src/components/ng-redux";
import {IAppState} from "../../reducers/root.reducer";
import {animate, keyframes, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('sidebarOpen', [
      state('open', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('close', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('open => close', animate('400ms ease-in-out')),
      transition('close => open', animate('400ms ease-in-out'))
    ]),
  ]
})
export class MainComponent implements OnInit {

  @select() layers;
  @select() ui;

  features: any[] = [];

  constructor( private ngRedux: NgRedux<IAppState>, private layerService: LayerService) { }

  ngOnInit() {

    const layers = this.layerService.getLayers();

    this.layers.subscribe(state => {
      this.features = [];
      state.features.forEach(feature => {this.features = this.features.concat(feature.features)});
    })

    this.ngRedux.dispatch({
      type: LayerActions.SET_BACKGROUND_LAYERS, body: layers,
    });

  }

}

