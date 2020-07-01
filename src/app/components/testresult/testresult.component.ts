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


  this.authService.getIsSolved().subscribe(res=>{
    this.name=res['firstName'];
    this.atest=res['aTest'].reverse();
    this.ctest=res['cTest'].reverse();
    console.log(this.ctest);
    this.count1=this.calC();
    this.fun();
   
})
}

calC(){
  console.log('first');
  let len=this.ctest.length;
  console.log(len);
  return len;
}
calc(){
  console.log('second');
  let len=this.Ctest.length;
  console.log(len);
  return len;
}


  fun(){
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

}
