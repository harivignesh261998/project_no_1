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

  editProfile(){
    this.edit=true;

  }
  cancel(){
    this.edit=false;
  }
  handleFileInput(event){
    this.fileToUpload = <File>event.target.files[0];
   
   
   
  }
  
  onLogin(form){
    this.loading=true;
    this.updatefirstName=form.value.firstName;
    this.updateLastName=form.value.lastName;
 

    this.updateProfile();
  }
  updateProfile(){

    // const fd=new FormData();
    // fd.append('image',this.fileToUpload,this.fileToUpload.name);
    //console.log(fd);
    this.authService.updateProfile(this.updatefirstName,this.updateLastName).subscribe(res=>{
      // console.log(res);
      this.cancel();
      this.ngOnInit();
      
      this.loading=false;
    }); 
    

  }


  openBottomSheet(): void {
    console.log('hai')
    this._bottomSheet.open(DocsComponent);
  }
 

  

}
  

