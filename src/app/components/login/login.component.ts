import { Component,Input, OnInit, OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms'

import { AuthService } from 'src/app/auth.service';
import {Subscription} from 'rxjs'

import { GlobalData } from 'src/app/models/global-data';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { DocsComponent } from '../docs/docs.component';
import { PasswordComponent } from '../password/password.component';



  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
private authStatusSub:Subscription;
public loading = false;
email=false;
global:GlobalData[];
college:string[]=[];
  ngOnInit(){
     this.loading=false
    
   this.authStatusSub= this.authService.getAuthStatusListner().subscribe(
     authStatus=>{
       this.loading=false;
     }
   );

   this.authService.college().subscribe(result=>{
    this.global=result; 
    this.global.forEach(cs=>{
      this.college.push(cs.college)
    })
   
   })
    
  }

  


  @Input() deviceXz:boolean;
  // isLoading=false;
  hide=true;


  OnSignup(form:NgForm){
    this.loading=true;
   console.log(form.value);
    if(form.invalid){
      return;
    }

    this.authService.createUser(form.value.firstName,form.value.lastName,form.value.mailId,form.value.password,form.value.collegeId)
  this.email=true;
  }

  onLogin(form:NgForm){
     this.loading=true;
    if(form.invalid){
      this.loading=false;
      return;
    }
   this.authService.login(form.value.mailId,form.value.password);
  
  
    

  
   
  }

  constructor(public authService:AuthService,private _bottomSheet: MatBottomSheet) { }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  

  }
  openBottomSheet(): void {
    this._bottomSheet.open(PasswordComponent);
  }

  
}
