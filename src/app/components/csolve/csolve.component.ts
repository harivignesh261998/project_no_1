import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-csolve',
  templateUrl: './csolve.component.html',
  styleUrls: ['./csolve.component.css']
})
export class CsolveComponent implements OnInit {
  questions;
  favoriteSeason;
  counter=0;
  timeleft:number;
  show=false;
  counterr;
  title;
  numberp=20;
  public index=0;
  jia=false;
  public question
  no;
  answers=[];
  options=[];
  IsSubmit=false;
  IsDisabled=true;
  gone=false;
  testId;
  qno=[];
  a:number;
    constructor(private authService:AuthService) { }
  
    ngOnInit():void{
       
      this.authService.getDuration().subscribe(res=>{
  
        this.title=res['testName'];
       this.testId=res['_id']
        this.timeleft=res['duration']*60;
      
      })
      
  
      this.authService.getAtestbyID().subscribe(res=>{
        this.question=this.shuffle(res['questions']);
        this.no=this.question.length;
        for(let i=0;i<this.question.length;i++){
          this.qno[i]=i+1;
        }
        this.questions=this.question[this.index];
        console.log(this.questions);
      })
  
      let intervalId = setInterval(() => {
        this.counterr= this.convertSeconds(this.timeleft - this.counter);
        this.counter++;
        if(this.counter==this.timeleft){
          this.gone=true;
          clearInterval(intervalId);
          
         
  
        } 
        if(this.counter==60){
        //toastr.error('Hey Candidate Hurry up only '+this.counterr+' left');
         this.jia=true;
         
        }
        
    }, 1000);
  
  
  
    
    }
  
    convertSeconds(s){
      let min=Math.floor(s/60);
      let sec=s%60;
      return min.toLocaleString('en-us',{minimumIntegerDigits:2}) +':'+sec.toLocaleString('en-us',{minimumIntegerDigits:2});
  
    }
  
    shuffle(arr){
      let ctr=arr.length,temp,index;
      while(ctr> 0){
        index=Math.floor(Math.random()*ctr)
        ctr--;
        temp = arr[ctr];
          arr[ctr] = arr[index];
          arr[index] = temp;
      }
      return arr;
  
    }
  
    next(){
      this.index++;
      this.favoriteSeason='';
      this.favoriteSeason=this.options[this.index];
        if(this.index >= 1){
          this.IsDisabled=false;
        }
    
        if(this.index==this.no-1){
          this.IsSubmit=true;
        }
        
    this.questions=this.question[this.index];
    }
  
    previous(){
      this.index--;
      this.favoriteSeason='';
      this.favoriteSeason=this.options[this.index];
      if(this.index==0){
        this.IsDisabled=true;
      }
      if(this.index!=this.no-1){
        this.IsSubmit=false;
      }
      
    this.questions=this.question[this.index];
    }
  answer(){
    
    if(this.favoriteSeason===this.question[this.index].answer){
      this.options[this.index]=this.favoriteSeason;
      this.answers[this.index]=1
    }
    else{
      this.options[this.index]=this.favoriteSeason;
      this.answers[this.index]=0;
  
    }
  }
  
  checkanswer(){
    
    let count=0,attempt=true;
    for(let a of this.answers){
      if (a==1){
  
        count++;
      }
  
    }
    console.log('count->',count);
  
    
  let date=new Date();
     
   this.authService.updateStudent(this.testId,this.title,count,attempt,date);

  

  }

  q(i){
    this.favoriteSeason='';
   this.favoriteSeason=this.options[i];
   this.questions=this.question[i];
   this.index=i;
   if(this.index >= 1){
    this.IsDisabled=false;
  }

  if(this.index==this.no-1){
    this.IsSubmit=true;
  }

  if(this.index==0){
    this.IsDisabled=true;
  }
  if(this.index!=this.no-1){
    this.IsSubmit=false;
  }

  }
  

}
