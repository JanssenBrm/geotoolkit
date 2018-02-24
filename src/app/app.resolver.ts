import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {IAppState} from "./reducers/root.reducer";
import {NgRedux} from '@angular-redux/store/lib/src/components/ng-redux';
import {LayerService} from "./services/layer.service";
import {LayerActions} from "./actions/layers.action";


@Injectable()
export class AppResolver implements Resolve<Observable<any>> {

  constructor( private router: Router, private ngRedux: NgRedux<IAppState>, private layerService: LayerService) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return null;
  }
}
