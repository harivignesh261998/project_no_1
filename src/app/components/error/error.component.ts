import { Component,Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSnackBarRef} from '@angular/material/snack-bar';



@Component({
  selector: 'app-error',
  template:'{{data.message}}',
  styleUrls: ['./error.component.css']
})


export class ErrorComponent implements MatSnackBarModule{
  
  


  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:{message:string,action:string}) { }

  
}
