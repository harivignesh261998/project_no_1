import { Component, OnInit, Injectable } from '@angular/core';
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
export class PracticetestComponent implements OnInit {
globalPractice:GlobalPracticeSummary[];
golabal:GlobalPracticeSummary[];
practice
practicediff
message='Practice Test'
act:any
public diff:string;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {

    this.authService.getPractice().subscribe(res=>{
      this.globalPractice=res;
      this.practice=this.globalPractice['practiceQuestions'];
      this.practicediff=this.practice;

    })
    

  }

  solve(id:string){
    // console.log(id);
    this.authService.getElement(id);
    this.authService.getstatusbar(this.message);

   this.router.navigate(['practice/practicetest/solve']);

  }

  filter(event){
    console.log(event.value);
    let a=event.value;
    this.practice.forEach(cs => {
      if(a==cs.difficulty){
        this.practicediff=cs;
      }
      
      
    });
    

  }


}

