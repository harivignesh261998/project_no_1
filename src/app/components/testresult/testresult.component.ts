import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { GoogleChartInterface } from 'ng2-google-charts';


@Component({
  selector: 'app-testresult',
  templateUrl: './testresult.component.html',
  styleUrls: ['./testresult.component.css']
})
export class TestresultComponent implements OnInit {
name;
atest;
ctest;
atemp;
Atest;
Ctest
Citest=[];
count1=0;
count2=0;
count3=0;
count4=0;
aPer;
cPer;
LineChart:GoogleChartInterface ={
  chartType:'LineChart'

}
  constructor(private authService:AuthService) { }

  initChart(){
     this.LineChart= {
      chartType: 'LineChart',
      dataTable: [
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ],
      //firstRowIsData: true,
      options: {
        hAxis:{
          title:'Month'
        },
        vAxis:{
          titile:'Temperature'
        },
        pointSize:5,
        chartArea:{right:30},
        width:600,

      },
      

      
    };
  }

  ngOnInit(): void {
    
   this.initChart();
  // this.fun();
  this.authService.getCResult().subscribe(res=>{
    this.Ctest=res;
    this.count2=this.calc()
  })
  this.authService.getAResult().subscribe(res=>{
    this.Atest=res;
    this.count4=this.cala()
  })


  this.authService.getIsSolved().subscribe(res=>{
    this.name=res['firstName'];
    this.atest=res['aTest'].reverse();
    // this.aPer=this.calAper()
    this.ctest=res['cTest'].reverse();
    console.log(this.ctest);
    this.count1=this.calC();
    this.count3=this.calA();
    this.func();
    this.funa()
   
})
}

calC(){
 
  let len=this.ctest.length;
 
  return len;
}

calA(){
  let len=this.atest.length;
 
  return len;
}

calc(){
 
  let len=this.Ctest.length;
 
  return len;
}

cala(){
  let len=this.Atest.length;
 
  return len;


}


  func(){
    console.log('inga vanthorchu')
    for(let i=0;i<this.count1;i++){
      console.log(true);
      for(let j=0;j<this.count2;j++){
        console.log(true);
        if(this.Ctest[j]._id===this.ctest[i].testId){
        
          this.Ctest[i]=this.Ctest[j];
         
          
        }
       
 
      }
    }
  }

  funa(){
   
    for(let i=0;i<this.count3;i++){
   
      for(let j=0;j<this.count4;j++){
   
        if(this.Atest[j]._id===this.atest[i].testId){
        
          this.Atest[i]=this.Atest[j];
         
          
        }
       
 
      }
    }
  }

  // calAper(){
  //   for(let a of this.atest){

  //   } 
  //   console.log('this is percenrahe---->',percent);
  // }


}
