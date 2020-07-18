import { Component,Input, OnInit, OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms'

import { AuthService } from 'src/app/auth.service';
import {Subscription} from 'rxjs'

import { GlobalData } from 'src/app/models/global-data';


  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
private authStatusSub:Subscription;
public loading = false;

global:GlobalData[];
college:string[]=[];
  ngOnInit(){
    // this.loading=false
    
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
   console.log(form.value);
    if(form.invalid){
      return;
    }
    this.loading=true;

    this.authService.createUser(form.value.firstName,form.value.lastName,form.value.mailId,form.value.password,form.value.collegeId)
  
    // this.loading=false;
  }

  onLogin(form:NgForm){
    if(form.invalid){
      return;
    }
    this.loading=true;
   this.authService.login(form.value.mailId,form.value.password);
   //this.loading=false;
  //  console.log('ahi '+a);
  
    

  
   
  }

  constructor(public authService:AuthService) { }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  

  }
}
