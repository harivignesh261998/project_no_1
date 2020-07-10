import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import {Chart} from 'chart.js'



@Component({
  selector: 'app-testresult',
  templateUrl: './testresult.component.html',
  styleUrls: ['./testresult.component.css']
})
export class TestresultComponent implements OnInit {
  chart=null;
  mchart=null;
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
progress;
month=[];
per=[];
dailypro;
d=[];
data=[];
monthy=['January','Febraury','March','April','May','June','July','August','September','October','November','December']

  constructor(private authService:AuthService) { }

  

 
  ngOnInit(): void {

    this.authService.getDailyprogress().subscribe(res=>{
      this.dailypro=res;
      console.log(this.dailypro);
     for(let i=0;i<this.dailypro.length;i++){
       this.d[i]=this.dailypro[i].date;
       this.data[i]=this.dailypro[i].dailyPercentage
     }
      let dates=[];
      this.d.forEach((res)=>{
        dates.push(res.slice(5,10));
      })
      console.log('->',dates);
      let data=[];
      this.data.forEach((res)=>{
        data.push(res);
      })
      console.log(data);

      this.chart=new Chart('canvas',{
        type:'line',
        data:{
          labels:dates,
          datasets:[
          {
            data:data,
            borderColor:'#3cba9f',
            fill:false

          }
        ]
        },
        options:{
          legend:{
            display:false
          },
          scales:{
            xAxes:[{
              display:true
            }],
            yAxes:[{
              display:true
            }]
          }
        }

      })
      
    })
    
    this.authService.getProgress().subscribe(res=>{
     this.progress=res;
   
     this.progress.sort((a,b) => a.month.toString().localeCompare(b.month.toString()));
     
     for(let i=0;i<this.progress.length;i++){
       this.month[i]=this.progress[i].month
       this.per[i]=this.progress[i].monthlyPercentage;
     }

     let month=[];
     this.month.forEach((res)=>{
       month.push(this.monthy[res-1]);
      })
    
     let data=[]
     this.per.forEach((res)=>{
       data.push(res);
     })
    
     this.mchart=new Chart('acanvas',{
      type:'line',
      data:{
        labels:month,
        datasets:[
        {
          data:data,
          borderColor:'#3cba9f',
          fill:false

        }
      ]
      },
      options:{
        legend:{
          display:false
        },
        scales:{
          xAxes:[{
            gridLines:{

              display:true
            }
          }],
          yAxes:[{
            gridLines:{

              display:true
            }
          }]
        }
      }

    })


        })
   
  
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
    this.ctest=res['cTest'].reverse();
    
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
    for(let i=0;i<this.count1;i++){
      for(let j=0;j<this.count2;j++){
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

  


}
