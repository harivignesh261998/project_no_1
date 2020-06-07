import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})

export class PracticeComponent implements OnInit{
  [x: string]: any;
  solve() {
    throw new Error("Method not implemented.");
  }
  UserIsAuthenticated=false;

  
  
  constructor(private authService:AuthService,private _snackBar:MatSnackBar ){}

  ngOnInit(){
    
    this.UserIsAuthenticated=this.authService.getIsAuth();
    console.log(this.UserIsAuthenticated);
    
  }
  
    image1:string="assets/image/1.png";
    image2:string="assets/image/2.png";
    image3:string="assets/image/3.png";
    image4:string="assets/image/4.png";
    image5:string="assets/image/5.png";
    image6:string="assets/image/6.png";
    image7:string="assets/image/7.png";
    image8:string="assets/image/8.png";
    image9:string="assets/image/9.png";
    authservice: any;

 

  

}
