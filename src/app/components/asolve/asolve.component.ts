import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-asolve',
  templateUrl: './asolve.component.html',
  styleUrls: ['./asolve.component.css']
})
export class AsolveComponent implements OnInit {
questions;
favoriteSeason;
counter=0;
timeleft=10;
show=false;
counterr;
ding;
public offset = { left: 500, top: 200 };
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.ding='assest/ding/ding.mp3'

    this.authService.getAtestbyID().subscribe(res=>{
      this.questions=this.shuffle(res['questions']);
      console.log(this.questions);
    })

    let intervalId = setInterval(() => {
      this.counterr= this.convertSeconds(this.timeleft - this.counter);
      this.counter++;
      if(this.counter==this.timeleft){
        
        
        clearInterval(intervalId)
       
       
      
        
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

  
 



}
