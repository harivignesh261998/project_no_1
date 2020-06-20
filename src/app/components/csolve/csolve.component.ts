import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-csolve',
  templateUrl: './csolve.component.html',
  styleUrls: ['./csolve.component.css']
})
export class CsolveComponent implements OnInit {
questions;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    this.authService.getAtestbyID().subscribe(res=>{
      this.questions=res['questions']
      console.log(this.questions);
    })

  }

}
