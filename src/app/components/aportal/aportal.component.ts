import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-aportal',
  templateUrl: './aportal.component.html',
  styleUrls: ['./aportal.component.css']
})
export class AportalComponent implements OnInit {
aTest:any;
Solved;
name='Atest';
check=[];
count1;
count2;
score=[];
public now: Date = new Date();
datee
  constructor(private authService:AuthService,private router:Router) {
    setInterval(() => {
      this.datee = formatDate(this.now,'yyyy-MM-dd hh:mm:ss a', 'en-US', '+0530')
    }, 1);
   }

  ngOnInit(): void {
    this.authService.getATest().subscribe(res=>{
      this.aTest=res;
      this.count1=this.aTest.length;
      console.log(this.aTest,this.count1)
      for(let a of this.aTest){
        console.log(a.startTime);
      }
    })

    this.authService.isSolvedAtest().subscribe(res=>{
      this.Solved=res;
      this.count2=this.Solved.length;
      console.log(this.Solved);
      console.log(this.count2);
      this.fun();

    })



    
  }

  min(id){
    this.authService.giveduration(id,this.name);
    this.authService.atestId(id);
    this.router.navigate(['practice/portal/aportal/instructions']);
  }

  

  fun(){
    // for(let a of this.aTest){
    //   if(a.closeTime>this.datee){
    //     console.log(true);
    //   }
    //   else{
    //     console.log(false);
    //   }
      
    // }
    for(let i=0;i<this.count1;i++){
      for(let j=0;j<this.count2;j++){
        if(this.aTest[i]._id===this.Solved[j].testId){
          this.score[i]=this.Solved[j].score;
          this.check[i]=true;
        }
        
      }
    }
    console.log('is solved->',this.check);
  }



}
