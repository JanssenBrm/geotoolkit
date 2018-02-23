import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {IAppState} from "./reducers/root.reducer";
import {NgRedux} from '@angular-redux/store/lib/src/components/ng-redux';


@Injectable()
export class AppResolver implements Resolve<Observable<any>> {

  constructor( private router: Router, private ngRedux: NgRedux<IAppState>) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const layers = {};
    //return Observable.forkJoin(layers);
    return null;
  }
}
