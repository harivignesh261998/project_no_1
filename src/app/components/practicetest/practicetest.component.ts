import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalPracticeSummary } from 'src/app/models/global-data';
import {Subscription, Observable} from 'rxjs'
import { Router } from '@angular/router';
import * as _ from 'lodash';




@Component({
  selector: 'app-practicetest',
  templateUrl: './practicetest.component.html',
  styleUrls: ['./practicetest.component.css']
})
@Injectable({providedIn:"root"})
export class PracticetestComponent implements OnInit  {
globalPractice:GlobalPracticeSummary[];
golabal:GlobalPracticeSummary[];
public practice
message='Practice Test'
status:any;
topic:any;
difficulty:any;
filterdata:any;
solved=true;
solvedData;



filters={}

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {

    this.authService.getPractice().subscribe(res=>{
      this.globalPractice=res;
      this.practice=this.globalPractice['practiceQuestions'];  
      this.applyFilters(); 
    })

   this.authService.getIsSolved().subscribe(res=>{
     this.solvedData=res['practicedQuestions'];
    //  console.log(this.practice);
    //  this.applyFilters();
   })

  }

  private applyFilters(){
    this.filterdata=_.filter(this.practice,_.conforms(this.filters));
    console.log('second ',this.filterdata);
    console.log('seco-nd',this.filters);

  }

  filterExact(property:string,rule:any){
    console.log('hai-hello->',rule);
    this.filters[property]=val=>val==rule
    this.applyFilters();
  }

 filterBoolean(property:string,rule:boolean){
   if(!rule){
      this.removeFilter(property)
   }
   else{
     this.filters[property]=val=>val
     this.applyFilters();
   }
 }


removeFilter(property:string){
  delete this.filters[property]
  this[property]=null;
  this.applyFilters();

}

solve(id:string){
      this.authService.getElement(id);
      this.authService.getstatusbar(this.message);
      this.router.navigate(['practice/practicetest/solve']);
    }

    

}

