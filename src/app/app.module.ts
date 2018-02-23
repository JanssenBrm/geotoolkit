import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgRedux, NgReduxModule} from '@angular-redux/store';

import { AppComponent } from './app.component';

import {IAppState, rootReducer, INITIAL_STATE} from '../app/reducers/root.reducer';
import {AppResolver} from "./app.resolver";
import {MainComponent} from "./components/main/main.component";


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
];



@NgModule({
  declarations: [
    MainComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true } ),
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
