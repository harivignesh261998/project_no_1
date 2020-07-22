import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import {Chart} from 'chart.js'
// import { forEach } from 'lodash';



@Component({
  selector: 'app-testresult',
  templateUrl: './testresult.component.html',
  styleUrls: ['./testresult.component.css']
})
export class TestresultComponent implements OnInit {
  chart=null;
  mchart=null;
  wchart=null;
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
public loading=false;
monthy=['January','Febraury','March','April','May','June','July','August','September','October','November','December']
  monPro: any;

  constructor(private authService:AuthService) { }

  

 
  ngOnInit(): void {
    // this.loading=true;

    this.authService.getDailyprogress().subscribe(res=>{
      //console.log(res);
      let date=res['dateArr'];
      let score=res['scoreArr'];
  
     for(let i=0;i<date.length;i++){
       this.d[i]=date[i];
       this.data[i]=score[i];
     }
      let dates=[];
      this.d.forEach((res)=>{
        dates.push(res);
      })
     // console.log('->',dates);
      let data=[];
      this.data.forEach((res)=>{
        data.push(res);
      })
//      console.log(data);

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
     // console.log(res);
    let monthArr=res['monthArr'];
    let scoreArr=res['scoreArr']; 
   
     monthArr.sort((a,b) => a.toString().localeCompare(b.toString()));
     console.log(monthArr);
     let month=[];
     let data=[];
     for(let i=0;i<monthArr.length;i++){
       month[i]=monthArr[i];
       data[i]=scoreArr[i];
     }

     let montho=[];
     month.forEach((res)=>{
       montho.push(this.monthy[res.slice(0,1)-1]);
      })
      
    
     let dataa=[]
     data.forEach((res)=>{
       dataa.push(res);
     })
    
     this.mchart=new Chart('acanvas',{
      type:'line',
      data:{
        labels:montho,
        datasets:[
        {
          data:dataa,
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
   this.authService.getweeklyProgress().subscribe(res=>{
     console.log(res);
     let weekArr=res['weekArr'];
     let scoreArr=res['scoreArr'];
     let week=[];
     let score=[];
     for(let i=0;i<weekArr.length;i++){
      week[i]=weekArr[i];
      score[i]=scoreArr[i];
    }
    let weeky=[];
    week.forEach((res)=>{
      weeky.push(res);
     })
     
   
    let data=[]
    score.forEach((res)=>{
      data.push(res);
    })
   
    this.wchart=new Chart('ccanvas',{
     type:'line',
     data:{
       labels:weeky,
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
   this.loading=false;
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
