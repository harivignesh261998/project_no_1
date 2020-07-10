import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NotifierService, } from 'angular-notifier';





@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    private notifier: NotifierService;
constructor(notifier: NotifierService){
    this.notifier = notifier;

}
    
    intercept(req:HttpRequest<any>,next:HttpHandler){
        
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse)=>{
                let errorMessage='Check Your Internet Connection'
                
                if(error.error.message){
                    errorMessage=error.error.message;

                }
                 
                // console.log('came here',errorMessage)
                //this.dialog.openFromComponent(ErrorComponent,{data:{message:errorMessage}});
                this.handle(errorMessage);
                return throwError(error);
            })
        );
    }

    handle(errorMessage){
       

        this.notifier.notify('default',errorMessage);
    }

    

    
}