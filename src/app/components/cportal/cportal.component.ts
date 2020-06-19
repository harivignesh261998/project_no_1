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

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authService.getCTest().subscribe(res=>{
      console.log(res);
      this.CTest=res;
      // for(let a of this.CTest){
      //   console.log(a.testName);
      // }
    })
  }

 min(id){
   this.authService.giveduration(id,this.name);
   this.router.navigate(['practice/portal/cportal/instructions'])
 }


}
