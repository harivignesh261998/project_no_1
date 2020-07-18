import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 public mail:any;
 public firstname:any;
 public loading=false;

  image1:string="assets/image/people.png";

  constructor(private authService:AuthService) { }
  ngOnInit(): void {
    this.loading=true;
    this.authService.getUsername().subscribe(res=>{
      this.mail=res['mailId'];
      this.firstname=res['firstName']
      this.loading=false;
    })
    


    
  }
}
  

