import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})


export class InstructionsComponent implements OnInit{
  public loading=false;
name;
counter=0;
timeleft=10;
noofq;
topic
counterr;
IsDisabled=true;
duration;
  constructor(private authService:AuthService,private router:Router) {
  
  }


  ngOnInit(): void {
    this.loading=true;
    this.authService.getDashboardoff();
    this.authService.getUsername().subscribe(res=>{
      this.name=res['firstName'];

    })


    
this.authService.getDuration().subscribe(res=>{
  this.duration=res['duration']
  this.noofq=res['questions']
  this.noofq=this.noofq.length;
  this.topic=res['testName']
  this.loading=false;
  
})

    
    
    
   
    let intervalId = setInterval(() => {
      this.counterr = this.convertSeconds(this.timeleft - this.counter);
      this.counter++;
      if(this.counter === this.timeleft){
        clearInterval(intervalId)
        this.IsDisabled=false ;
      } 
      
  }, 1000)

    

    
  }
  convertSeconds(s){
    let min=Math.floor(s/60);
    let sec=s%60;
    return min.toLocaleString('en-us',{minimumIntegerDigits:2}) +':'+sec.toLocaleString('en-us',{minimumIntegerDigits:2});


  }

 

  getQues(){
    let name=this.authService.getName()
  //  console.log('this is the name->',name)
   
if(name=='Atest'){
    this.router.navigate(['practice/portal/aportal/asolve']);
  }
  else
  {
    this.router.navigate(['practice/portal/cportal/csolve']);
  }
}

}