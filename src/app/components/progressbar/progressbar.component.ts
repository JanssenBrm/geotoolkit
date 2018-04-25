import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit, OnChanges {

  constructor() { }

  @Input()
  loadingCount: number;

  @Input()
  loadedCount: number;

  progress: number;

  ngOnInit() {
    this.calculateProgress();
  }

  ngOnChanges(simpleChanges: SimpleChanges){
    this.calculateProgress();
  }

  calculateProgress(){
    this.progress = (this.loadedCount / this.loadingCount) * 100;
  }


}
