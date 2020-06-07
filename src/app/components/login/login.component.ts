import { Component,Input, OnInit, OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms'
import {Router} from '@angular/router'
import { AuthService } from 'src/app/auth.service';
import {Subscription} from 'rxjs'
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GlobalData } from 'src/app/models/global-data';


  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
private authStatusSub:Subscription;

global:GlobalData[];
college:string[]=[];
  ngOnInit(){
   this.authStatusSub= this.authService.getAuthStatusListner().subscribe(
     authStatus=>{
       this.isLoading=false;
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
  isLoading=false;
  hide=true;


  OnSignup(form:NgForm){
   console.log(form.value);
    if(form.invalid){
      return;
    }
    this.isLoading=true;

    this.authService.createUser(form.value.firstName,form.value.lastName,form.value.mailId,form.value.password,form.value.collegeId)
  
    
  }

  onLogin(form:NgForm){
    if(form.invalid){
      return;
    }
    this.isLoading=true;
   this.authService.login(form.value.mailId,form.value.password);
  //  console.log('ahi '+a);
  
    

  
   
  }

  constructor(public authService:AuthService) { }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  

  }
}
