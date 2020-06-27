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
   public fillid;
   public index;
global:GlobalPracticeTest[];

practice;
  
  constructor(private authService:AuthService){}
  ngOnInit() {
    this.authService.getSolve().subscribe(res=>{
    this.global=res['practiceQuestions']
    this.practice=this.global
    console.log(this.practice);
    })
    this.authService.getstatusbar_1().subscribe(res=>{
      this.message=res;
      console.log(this.message);
    })
    this.fillid=this.authService.getFilterids();
    console.log(this.fillid);

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

next(){
  for(let i=0;i<this.fillid.length;i++){
    if(this.fillid[i]===this.practice._id){
      this.index=i;
    }
  }

  console.log(this.fillid[this.index+1]);
  
if(this.fillid[this.index+1]===undefined){
  
  console.log('nothing to show');
}
else{
        this.authService.getnextpracticeques(this.fillid[this.index+1]).subscribe(res=>{
          this.practice=res['practiceQuestions'];
          
        })
    }


  


}





}









