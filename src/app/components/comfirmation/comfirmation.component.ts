import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-comfirmation',
  templateUrl: './comfirmation.component.html',
  styleUrls: ['./comfirmation.component.css']
})
export class ComfirmationComponent implements OnInit {
token
  constructor(private route:ActivatedRoute,private authService:AuthService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
     
      this.authService.verify(params.token);
    });
    
  }

}
