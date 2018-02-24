import {Component, Input, OnInit} from '@angular/core';
import {NgRedux} from "@angular-redux/store/lib/src/components/ng-redux";
import {IAppState} from "../../../reducers/root.reducer";
import {ToolBoxActions} from "../../../actions/toolbox.action";


@Component({
  selector: 'app-toolboxaction',
  templateUrl: './toolboxaction.component.html',
  styleUrls: ['./toolboxaction.component.scss']
})
export class ToolboxActionComponent implements OnInit {

  constructor( private ngRedux: NgRedux<IAppState>) { }

  @Input()
  icon: string;

  @Input()
  action: string;

  @Input()
  isActive: boolean;

  ngOnInit() {

  }

  selectAction(){
    const action = this.isActive ? '' : this.action;

    this.ngRedux.dispatch({
      type: ToolBoxActions.SELECT_ACTION,
      body: {
        action: action
      }
    });
  }
}
