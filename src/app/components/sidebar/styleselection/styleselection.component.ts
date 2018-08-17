import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

export interface DialogData {
    styles: string;
}

@Component({
  selector: 'app-styleselection',
  templateUrl: './styleselection.component.html',
  styleUrls: ['./styleselection.component.scss']
})
export class StyleselectionComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<StyleselectionComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {}

    setStyle(event: any) {
      this.closeDialog(event.target.value);
    }
    cancel() {
      this.closeDialog(null);
    }

    closeDialog(data: any) {
      this.dialogRef.close(data);
    }

}
