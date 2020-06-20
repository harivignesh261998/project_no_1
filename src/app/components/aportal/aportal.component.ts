import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aportal',
  templateUrl: './aportal.component.html',
  styleUrls: ['./aportal.component.css']
})
export class AportalComponent implements OnInit {
aTest:any;
name='Atest';
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authService.getATest().subscribe(res=>{
      console.log(res);
      this.aTest=res
    })
    
  }

  min(id){
    this.authService.giveduration(id,this.name);
    this.authService.atestId(id);
    this.router.navigate(['practice/portal/aportal/instructions']);
  }

  

  // asolve(id){
  //   this.authService.atestId(id);
  //   this.router.navigate(['practice/portal/aportal/asolve']);
    
  // }

}
