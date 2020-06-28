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
    this.authService.getIsSolved().subscribe(res=>{
      this.name=res['firstName'];
      this.atest=res['aTest'].reverse();
      this.ctest=res['cTest'].reverse();
    })
    this.initChart();
    
  }

}
