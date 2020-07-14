import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acsolve',
  templateUrl: './acsolve.component.html',
  styleUrls: ['./acsolve.component.css']
})
export class AcsolveComponent implements OnInit {
  private notifier: NotifierService;
name
title;
testId;
timeleft;
fivemin;
question;
no;
qno=[];
questions;
index=0;
counterr;
counter=0;
favoriteSeason;
options=[];
answers=[];
IsSubmit=false;
IsDisabled=true;
hours
seconds
minutes;
  constructor(private authService:AuthService,notifier: NotifierService,private router:Router) {
    this.notifier = notifier;

   }

  ngOnInit(): void {
    let sdate=new Date();
     this.hours = sdate.getHours();
    this.minutes = sdate.getMinutes();
    this.seconds = sdate.getSeconds();

    this.name=this.authService.Testname()
    if(this.name=='Atest'){
      this.afunc();
    }
    else{
      this.cfunc();
    }
    
  }

  afunc(){
    this.authService.getDuration().subscribe(res=>{

      this.title=res['testName'];
      this.testId=res['_id']

      this.timeleft=res['duration']*60;
     
    })
    this.summa();
    this.neram();
    

  }

  cfunc(){
    this.authService.getDuration().subscribe(res=>{
  
      this.title=res['testName'];
     this.testId=res['_id']
      this.timeleft=res['duration']*60;
      this.fivemin=this.timeleft-300;
    
    })

    this.summa();
    this.neram();

    

   


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
  convertSeconds(s){
    let min=Math.floor(s/60);
    let sec=s%60;
    return min.toLocaleString('en-us',{minimumIntegerDigits:2}) +':'+sec.toLocaleString('en-us',{minimumIntegerDigits:2});

  }

  public showNotification( type: string, message: string ) {
    
    this.notifier.notify( type, message );
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

  
let endate=new Date();
let hours = endate.getHours();


let minutes = endate.getMinutes();


let seconds = endate.getSeconds();


   
 this.authService.updateStudent(this.testId,count,this.hours + ":" + this.minutes+":"+this.seconds,hours + ":" + minutes+":"+seconds);
 this.router.navigate(['/testresult']);


}


summa(){
  this.authService.getAtestbyID().subscribe(res=>{
    this.question=this.shuffle(res['questions']);
    this.no=this.question.length;
    for(let i=0;i<this.question.length;i++){
      this.qno[i]=i+1;
    }
    this.questions=this.question[this.index];
    console.log(this.questions);
  })
}

neram(){
  let intervalId = setInterval(() => {
    this.counterr= this.convertSeconds(this.timeleft - this.counter);
    this.counter++;
    if(this.counter==this.timeleft){

    
      clearInterval(intervalId);
    
      if (confirm('Time Up ! Click ok to submit')) {
        this.checkanswer();
      } 
      
          
     

    } 
    if(this.counter==this.fivemin){
      
      this.showNotification('warning','Hey only 5 minutes left,Hurry up!');
    }
    
}, 1000);
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
