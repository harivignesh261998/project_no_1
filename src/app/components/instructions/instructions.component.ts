import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})


export class InstructionsComponent implements OnInit{
name;
counter=60;
noofq;
topic

IsDisabled=true;
duration;
  constructor(private authService:AuthService) {
  
  }


  ngOnInit(): void {
 

    this.authService.getUsername().subscribe(res=>{
      this.name=res['firstName']
    })


    
this.authService.getDuration().subscribe(res=>{
  this.duration=res['duration']
  this.noofq=res['questions']
  this.noofq=this.noofq.length;
  this.topic=res['testName']
  
})
    
    
    
   
    let intervalId = setInterval(() => {
      this.counter = this.counter - 1;
      if(this.counter === 0){
        clearInterval(intervalId)
        this.IsDisabled=false ;
      } 
      
  }, 1000)

    

    
  }

 

  

}
