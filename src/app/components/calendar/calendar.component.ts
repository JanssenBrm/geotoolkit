import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  date: any;
  @Input()
  dateranges: string[];
  dateidx: number;
  constructor() { }

  ngOnInit() {

    this.dateidx = 0;
    this.dateranges = [ '2018-04-27T22:00:00.000Z', '2018-04-08T22:00:00.000Z', '2018-04-10T22:00:00.000Z', '2018-04-17T22:00:00.000Z'];
    this.date = this.dateranges[this.dateidx];

  }

  dateFilter = (d: Date): boolean => {
    const day = d.toISOString();

    console.log(day);

    return this.dateranges.indexOf(day) >= 0;

  }

  selectDate(date){
    console.log("SELECT DATE", date);
  }

  selectNextDay(){
    this.dateidx = (++this.dateidx == this.dateranges.length ? 0 : this.dateidx)
    this.date = this.dateranges[this.dateidx];
  }
  selectPreviousDay(){
    this.dateidx = (--this.dateidx < 0 ? this.dateranges.length - 1: this.dateidx)
    this.date = this.dateranges[this.dateidx];
  }

}
