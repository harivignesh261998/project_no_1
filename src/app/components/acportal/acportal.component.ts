import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acportal',
  templateUrl: './acportal.component.html',
  styleUrls: ['./acportal.component.css']
})
export class AcportalComponent implements OnInit {

  Test;
count1;
public now: Date = new Date();
datee
Solved
count2
score=[];
check=[];
name
math=Math
  constructor(private authService:AuthService,private router:Router) {
    setInterval(() => {
      this.datee = formatDate(this.now,'yyyy-MM-dd hh:mm:ss a', 'en-US', '+0530')
    }, 1);
   }

  ngOnInit(): void {
     this.name=this.authService.Testname()
    if(this.name=='Atest'){
      console.log(true);
      this.afunction();
    }
    else{
      this.cfunction();
    }

  }

  afunction(){

    this.authService.getATest().subscribe(res=>{
      
      this.Test=res;
      this.count1=this.Test.length;

    })

    this.authService.isSolvedAtest().subscribe(res=>{
      this.Solved=res;
      this.count2=this.Solved.length;
      this.fun();

    })
   


  }

  cfunction(){
    

    this.authService.getCTest().subscribe(res=>{
      this.Test=res;
      this.count1=this.Test.length

    })

    this.authService.isSolvedCtest().subscribe(res=>{
      this.Solved=res;
      
      console.log(this.score);
      this.count2=this.Solved.length;
      this.fun();
    })

  }


  fun(){
   
    for(let i=0;i<this.count1;i++){
      for(let j=0;j<this.count2;j++){
        if(this.Test[i]._id===this.Solved[j].testId){
          this.score[i]=this.Solved[j].score;
          this.check[i]=true;
          
        }
        
      }
    }
    
  }

  min(id){
    this.authService.giveduration(id,this.name);
    this.authService.atestId(id);
    this.router.navigate(['practice/portal/aportal/instructions']);
  }

}
