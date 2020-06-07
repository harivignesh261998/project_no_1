import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from './components/error/error.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'



@Injectable()
export class ErrorInterceptor implements HttpInterceptor,MatSnackBarModule{
constructor(private dialog:MatSnackBar){}
    
    intercept(req:HttpRequest<any>,next:HttpHandler){
        
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse)=>{
                let errorMessage='An unknown error occured'
                
                if(error.error.message){
                    errorMessage=error.error.message;

                }
                this.dialog.openFromComponent(ErrorComponent,{data:{message:errorMessage}});
                
                return throwError(error);
            })
        );
    }
}