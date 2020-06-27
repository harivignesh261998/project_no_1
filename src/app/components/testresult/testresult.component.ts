import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import {animate, state, style, transition, trigger} from '@angular/animations';


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
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getIsSolved().subscribe(res=>{
      this.name=res['firstName'];
      this.atest=res['aTest'].reverse();
      this.ctest=res['cTest'].reverse();
    })
    
  }

}
