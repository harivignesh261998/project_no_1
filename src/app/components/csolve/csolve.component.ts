import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-csolve',
  templateUrl: './csolve.component.html',
  styleUrls: ['./csolve.component.css']
})
export class CsolveComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    this.authService.getCtestbyID().subscribe(res=>{
      console.log(res);
    })

  }

}
