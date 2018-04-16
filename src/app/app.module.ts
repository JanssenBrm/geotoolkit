import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgRedux, NgReduxModule} from '@angular-redux/store';

import { AppComponent } from './app.component';

import {IAppState, rootReducer, INITIAL_STATE} from '../app/reducers/root.reducer';
import {AppResolver} from "./app.resolver";
import {MainComponent} from "./components/main/main.component";
import { MapComponent } from './components/map/map.component';
import {LayerService} from "./services/layer.service";
import { ActionsComponent } from './components/toolbox/toolbox.component';
import {
  ToolboxActionComponent
} from './components/toolbox/toolboxaction/toolboxaction.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayerselectionComponent } from './components/sidebar/layerselection/layerselection.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import { DrawComponent } from './components/sidebar/draw/draw.component';
import {MapboxService} from "./services/mapbox.service";
import { KeysPipe } from './pipes/keys.pipe';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  { path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
];



@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    MapComponent,
    ActionsComponent,
    ToolboxActionComponent,
    SidebarComponent,
    LayerselectionComponent,
    DrawComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true } ),
    NgReduxModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    LayerService,
    MapboxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}