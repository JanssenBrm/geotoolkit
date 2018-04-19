import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from "@angular/forms";
import {IAppState} from "../../reducers/root.reducer";
import {NgRedux} from "@angular-redux/store/lib/src/components/ng-redux";
import {UIActions} from "../../actions/ui.action";
import {LayerActions} from "../../actions/layers.action";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnChanges {


  date: any;

  @Input()
  dateranges: string[];

  dateidx: number;
  constructor( private ngRedux: NgRedux<IAppState> ) { }

  ngOnInit( ) {

    this.dateidx = this.dateranges.length - 1;
    this.date = this.dateranges[this.dateidx];

  }

  ngOnChanges(changes: SimpleChanges): void {

    if(changes.dateranges && !changes.dateranges.isFirstChange()){
      this.selectNearestDate();
    }
  }



  dateFilter = (d: Date): boolean => {

    const month = d.getMonth() + 1;
    const day = d.getDate();
    const date = d.getFullYear() + "-" + ( month < 10 ? '0' : '') + month + "-" + (day < 10 ? '0' : '') + day;

    return this.dateranges.indexOf(date) >= 0;

  }

  selectDate(date){


    const calDate = new Date(date);

    const d = new Date(calDate);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const timeDate = d.getFullYear() + "-" + ( month < 10 ? '0' : '') + month + "-" + (day < 10 ? '0' : '') + day;

    this.dateidx = this.dateranges.indexOf(timeDate);
    this.date = this.dateranges[this.dateidx];

    this.ngRedux.dispatch({
      type: LayerActions.SELECT_DATE,
      body: {
        date: this.date
      }
    });
  }

  selectNextDay(){
    this.dateidx = (++this.dateidx == this.dateranges.length ? 0 : this.dateidx)
    this.date = this.dateranges[this.dateidx];
    this.ngRedux.dispatch({
      type: LayerActions.SELECT_DATE,
      body: {
        date: this.date
      }
    });

  }
  selectPreviousDay(){
    this.dateidx = (--this.dateidx < 0 ? this.dateranges.length - 1: this.dateidx)
    this.date = this.dateranges[this.dateidx];
    this.ngRedux.dispatch({
      type: LayerActions.SELECT_DATE,
      body: {
        date: this.date
      }
    });
  }

  selectNearestDate(){

    const currIdx = this.dateranges.indexOf(this.date);
    let minDiff = 999999999;
    let found = false;

    if( currIdx >= 0){
      this.dateidx = currIdx;
      this.date = this.dateranges[this.dateidx];
    }else{
      const currDate: Date = new Date(this.date);
      this.dateranges.forEach( dateItem => {
        const date: Date = new Date(dateItem);

        if(date >= currDate){
          var diff = currDate.getTime() - date.getTime();

          if(diff < minDiff){
            minDiff = diff;
            found = true;
            this.date = dateItem;
          }
        }
      });

      if(!found){
        this.date = this.dateranges[this.dateranges.length -1];
      }
      this.dateidx = this.dateranges.indexOf(this.date);
    }



    this.ngRedux.dispatch({
      type: LayerActions.SELECT_DATE,
      body: {
        date: this.date
      }
    });
  }

}
