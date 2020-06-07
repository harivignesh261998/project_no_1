import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth.service'
@Component({
  selector: 'app-learningportal',
  templateUrl: './learningportal.component.html',
  styleUrls: ['./learningportal.component.css']
})
export class LearningportalComponent implements OnInit {
private u1:any;
private u2:any;
private heading:any;
  ages(){

    this.u1='apiAgesPart';
    this.u2='questionsAgesPart';
    this.authService.hai(this.u1,this.u2);
  }
  clock(){
    this.u1='apiClocksCal';
    this.u2='questionsClocksCal';
    this.authService.hai(this.u1,this.u2);
  }
  dir(){
    this.u1='apiDirection';
    this.u2='questionsDirection';
    this.authService.hai(this.u1,this.u2);

  }
  constructor(private authService:AuthService) { }
  ngOnInit(): void {
  }
}
