import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cportal',
  templateUrl: './cportal.component.html',
  styleUrls: ['./cportal.component.css']
})
export class CportalComponent implements OnInit {
CTest;
name='Ctest'
Solved;
check=[];
count1;
count2;
score=[];
math=Math;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authService.getCTest().subscribe(res=>{
      this.CTest=res;
      this.count1=this.CTest.length

    })

    this.authService.isSolvedCtest().subscribe(res=>{
      this.Solved=res;
      
      console.log(this.score);
      this.count2=this.Solved.length;
      this.fun();
    })
  }

  fun(){
    for(let i=0;i<this.count1;i++){
      for(let j=0;j<this.count2;j++){
        if(this.CTest[i]._id===this.Solved[j].testId){
          this.score[i]=this.Solved[j].score;
          this.check[i]=true;
        }
        
      }
    }
   // console.log(this.check);
  }

 min(id){
   this.authService.giveduration(id,this.name);
   this.authService.atestId(id);
   this.router.navigate(['practice/portal/cportal/instructions'])
 }


}
