import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalPracticeSummary } from 'src/app/models/global-data';
import {Subscription, Observable} from 'rxjs'
import { Router } from '@angular/router';




@Component({
  selector: 'app-practicetest',
  templateUrl: './practicetest.component.html',
  styleUrls: ['./practicetest.component.css']
})
@Injectable({providedIn:"root"})
export class PracticetestComponent implements OnInit  {
globalPractice:GlobalPracticeSummary[];
golabal:GlobalPracticeSummary[];
practice
practicediff:[]
diff

message='Practice Test'
act:any
isFilter=false;
difffilter:[];





  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {

    this.authService.getPractice().subscribe(res=>{
      this.globalPractice=res;
      this.practice=this.globalPractice['practiceQuestions'];
     // this.practicediff=this.practice;

    })
    

  }

 
  solve(id:string){
    // console.log(id);
    this.authService.getElement(id);
    this.authService.getstatusbar(this.message);

   this.router.navigate(['practice/practicetest/solve']);

  }
 
filter(event:any){
  //console.log(event.value);
  for( let a of this.practice){
    if(event.value==a['difficulty']){
      console.log('sure');
      this.practice=a;
    }
  }

  
}

domain(event:any){
  console.log(event.value);
  
}
status(event:any){
  console.log(event.value);
  
}

}

