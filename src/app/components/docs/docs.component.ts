import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<DocsComponent>) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  cancel(){
    console.log('hai');
  }
  onLogin(form){
    console.log(form.firstName.value);
  }
}
