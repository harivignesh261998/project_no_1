import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from './components/error/error.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'
import { NotifierService } from 'angular-notifier';





@Injectable()
export class ErrorInterceptor implements HttpInterceptor,MatSnackBarModule{
    private notifier: NotifierService;
constructor(private dialog:MatSnackBar,notifier: NotifierService){
    this.notifier = notifier;

}
    
    intercept(req:HttpRequest<any>,next:HttpHandler){
        
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse)=>{
                let errorMessage='Check Your Internet Connection'
                
                if(error.error.message){
                    errorMessage=error.error.message;

                }
                 
                
                this.dialog.openFromComponent(ErrorComponent,{data:{message:errorMessage}});
                
                return throwError(error);
            })
        );
    }

    
}