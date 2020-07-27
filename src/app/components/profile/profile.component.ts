import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DocsComponent } from '../docs/docs.component';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
 public mail:any;
 public firstname:any;
 public loading=false;
public lastName;
fd;
  image:string="assets/image/profile.jpeg";
  // image:string="profileImages/5ecce663550abb20e8826259Design.jpg"
  fileToUpload: File = null;
edit=false;
aTest;
cTest;
updatefirstName;
updateLastName;
updateemail;
image1:string='assets/image/download.svg'
  constructor(private authService:AuthService,private router:Router,private _bottomSheet: MatBottomSheet) { }
  ngOnInit(): void {
    this.loading=true;
    this.authService.getUsername().subscribe(res=>{
      console.log(res);
      this.mail=res['mailId'];
      this.firstname=res['firstName']
      this.lastName=res['lastName']
      this.loading=false;
      this.aTest=res['aTest'].length;
      this.cTest=res['cTest'].length;
      console.log(this.aTest);
      console.log(this.cTest);
      this.loading=false;
    })
  }
  openBottomSheet(): void {
   
    this._bottomSheet.open(DocsComponent,{
      data:{names:[this.firstname,this.lastName]},
      
    });
    this.ngOnInit();
   
  }
}
  

