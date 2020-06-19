import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from 'src/app/auth.service'
import {Subscription} from 'rxjs'
import { InstructionsComponent } from '../instructions/instructions.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
 
})
export class DashboardComponent implements OnInit,OnDestroy {
 public UserIsAuthenticated=false;
 public data;


  private authListnerSubs:Subscription;
  


  constructor(private authservice:AuthService) {
    
  }
  ngOnInit(){
   
    this.UserIsAuthenticated=this.authservice.getIsAuth();
    if(this.UserIsAuthenticated){
      this.authservice.getUsername().subscribe(res=>{
        this.data=res['firstName'];
        //console.log('hello'+this.data);
      });
    }
    console.log('hai hello '+ this.UserIsAuthenticated);
    this.authListnerSubs=this.authservice.getAuthStatusListner().subscribe(isAuthenticated=>{
      this.UserIsAuthenticated=isAuthenticated;
    // console.log('hai hello vanakam'+ this.UserIsAuthenticated);
    this.authservice.getUsername().subscribe(res=>{
      this.data=res['firstName'];
      console.log('hai'+this.data);
    })

    });
    
    

  }
  
   
  

  ngOnDestroy(){
    this.authListnerSubs.unsubscribe();
  }

  onLogout(){

    // console.log('hai');
    this.authservice.logout();
  }

 
  dashboardfull(){
    console.log('full',this.UserIsAuthenticated);
    this.UserIsAuthenticated=false;
  }

}
