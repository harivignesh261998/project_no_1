import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {



  constructor(private authService:AuthService,private router:Router) { }
atest='Atest'
ctest='Ctest';
  ngOnInit():void {
    

  }
  amin(){
    this.authService.givedurationn(this.atest);
    this.router.navigate(['practice/portal/aportal'])
  }
  cmin(){
    this.authService.givedurationn(this.ctest);
    this.router.navigate(['practice/portal/cportal']);
  }


}
