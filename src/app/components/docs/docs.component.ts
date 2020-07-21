import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-docs',
  templateUrl:'./docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  firstName
  lastName

  constructor(private _bottomSheetRef: MatBottomSheetRef<DocsComponent>,private authService:AuthService,@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {}
  ngOnInit(): void {
   
    
  }
  

  
  cancel(){
    this._bottomSheetRef.dismiss();
  }
  onLogin(form){
    this.authService.updateProfile(form.value.firstName,form.value.lastName);
    this._bottomSheetRef.dismiss();

  }

}
