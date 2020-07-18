import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalPracticeSummary } from 'src/app/models/global-data';
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
check=[];
count1;
count2;
filteringdata:any;
allcaught=false;
image1:string="assets/image/all_caught_up";
public loading=false;


filters={}

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loading=true;

    this.authService.getPractice().subscribe(res=>{
      this.globalPractice=res;
      this.practice=this.globalPractice['practiceQuestions']; 
      this.count1=this.practice.length; 
    })

   this.authService.getIsSolved().subscribe(res=>{
     this.solvedData=res['practicedQuestions'];
     this.count2=this.solvedData.length;
     this.applyFilters(); 
     this.fun();
     this.loading=false;
   })


  }

  private applyFilters(){
    this.filterdata=_.filter(this.practice,_.conforms(this.filters));
    console.log(this.filterdata.length);
    if(this.filterdata.length==0){
      console.log('hai')
      this.allcaught=true;
    }
    else{
      console.log('hello');
      this.allcaught=false;
    }
  }

  filterExact(property:string,rule:any){
    
    this.filters[property]=val=>val==rule
    this.applyFilters();
    this.fun();
  }

 


removeFilter(property:string){
  delete this.filters[property]
  this[property]=null;
  this.applyFilters();

}

solve(id:string){
  let cs=[];
  let index=0;
 for(let a in this.filterdata){
   if(this.filterdata[a].status!='Solved'){
     cs[index]=this.filterdata[a]._id;  
     index++;
   }
 }

      this.authService.getElement(id,cs);
      this.authService.getstatusbar(this.message);
     // this.authService.givefilterid(this.filterdata._id);
      this.router.navigate(['practice/practicetest/solve']);
    }

    fun(){
    //  this.check=[]
      for(let i=0;i<this.filterdata.length;i++){
        for(let j=0;j<this.solvedData.length;j++){
          if(this.filterdata[i]._id===this.solvedData[j]){
            this.check[i]=true;
            this.filterdata[i].status='Solved';
          }
          else{
            this.check[i]=false;
          }

        }
        
      }
    }

}

