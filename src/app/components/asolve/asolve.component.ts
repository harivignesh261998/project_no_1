import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-asolve',
  templateUrl: './asolve.component.html',
  styleUrls: ['./asolve.component.css']
})
export class AsolveComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    this.authService.getAtestbyID().subscribe(res=>{
      console.log(res);
    })
  }

}
