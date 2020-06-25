import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalPracticeTest } from 'src/app/models/global-data';





@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})


export class SolveComponent implements OnInit{
  public isWrong=false;
  public isTrue=false;
   public isempty=false;
   public favoriteSeason:string;
   public message;
   public count=0;
   public scorePoints;
global:GlobalPracticeTest[];

practice;
  
  constructor(private authService:AuthService){}
  ngOnInit() {
    this.authService.getSolve().subscribe(res=>{
    this.global=res['practiceQuestions']
    this.practice=this.global
    })
    this.authService.getstatusbar_1().subscribe(res=>{
      this.message=res;
      console.log(this.message);
    })

  }
checkanswer(){
  this.count++;
  if(this.favoriteSeason==this.practice.answer){
    this.isTrue=true;
    if(this.count==1){
      this.scorePoints=10;
    }
    else if(this.count==2){
      this.scorePoints=5;
    }
    else if(this.count==3){
      this.scorePoints=2.5;
    }
    else{
      this.scorePoints=0;
    }

    this.authService.updatePractice(this.practice._id);
    console.log(this.scorePoints);
    
  }
  else{
    this.isWrong=true;
  }
}

wrong(){
  this.isWrong=false;
}





}









