import { Component, OnInit } from '@angular/core';
import {select} from "@angular-redux/store";
import {TOOLBOX_ACTIONS} from "../../config/toolboxactions.config";

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ActionsComponent implements OnInit {

  @select() ui;
  constructor() { }

  actions: any[];
  activeAction: string;

  ngOnInit() {

    this.actions = TOOLBOX_ACTIONS;

    this.ui.subscribe(state =>{
      this.activeAction = state.activeAction;
    })
  }

}
