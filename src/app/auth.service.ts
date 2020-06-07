import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {AuthData} from './auth-data.model';
import {Auth} from './auth-data.model';
import { GlobalDataSummary,GlobalData, GlobalPracticeSummary, GlobalPracticeTest, GlobalUserData} from './models/global-data'; 

import { Observable, Subject, of } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
@Injectable({providedIn:"root"})
export class AuthService{
    
private clgURl:string='/assets/data/college.csv'
  // private _url:string='http://localhost:4600/apiAgesPart/questionsAgesPart';
  //private _url:string='/assets/data/data.csv';
  public message;
    public u3:any;
    public u4:any;
    public userId:Object;
    public id:string;
    public mail:string;
    public response:string;
    private qwerty:string;
    private isAuthenticated=false;
    private token:string;
    private tokenTimer:any;
    private authStatusListner=new Subject<boolean>();
    constructor(private http:HttpClient,private router:Router){}
    getToken(){
        return this.token;

    }
    getAuthStatusListner(){
        return this.authStatusListner.asObservable();

    }
    getIsAuth(){
        return this.isAuthenticated;

    }

    createUser(firstName:string,lastName:string,mailId:string,password:string,collegeId:number){
        const authData:AuthData={firstName:firstName,lastName:lastName,mailId:mailId,password:password,collegeId:collegeId};
         this.http.post("apiRegister/studentRegister",authData).subscribe(()=>{
             this.router.navigate["/login"];
         },error=>{
             this.authStatusListner.next(false);
         });

    }
 

   login(mailId:string,password:string){
       console.log(mailId,password);
     
        const auth:Auth={mailId:mailId,password:password};

        this.http.post<{token:string,expiresIn:number,studentId:Object}>("apiLogin/studentLogin",auth).subscribe(response=>{
            
            const token=response.token;
            this.token=token;
            this.userId=response.studentId;
            
            //const a=this.userId.toString();
            console.log('hai hello is this'+this.userId);
           
            if(token){
                
                const expiresInDuration=response.expiresIn;
     
                this.setAuthTimer(expiresInDuration);
               
                this.isAuthenticated=true;
              
                this.authStatusListner.next(true);
                const now =new Date();
                const expirationDate=new Date(now.getTime()+expiresInDuration*1000);
              
                this.saveAuthData(token,expirationDate,this.userId);
               
                
            
                this.router.navigate(['/practice'])
                

            }
           
           
           
        },error=>{
            this.authStatusListner.next(false);
            
        });

        
    }
   
    

    hai(u1: any,u2: any){
        this.u3=u1;
        this.u4=u2;
        console.log(this.u3,this.u4);
    }

 getData():Observable<GlobalDataSummary[]>{
        return this.http.get<GlobalDataSummary[]>(`/${this.u3}/${this.u4}`);
            
}
autoAuthUser(){
    const authInformation=this.getAuthData();
  
    if(!authInformation){
       
        return;
    }
    const now =new Date();
    const expiresIn=authInformation.expirationDate.getTime()-now.getTime();
 
    if(expiresIn > 0){
        this.token=authInformation.token;
        this.isAuthenticated=true;
      
        this.setAuthTimer(expiresIn/1000);

        this.authStatusListner.next(true);

    }  



}

logout(){
    this.token=null;
    this.isAuthenticated=false;
    this.authStatusListner.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);

}
private setAuthTimer(duration:number){
 
    this.tokenTimer= setTimeout(()=>{
        this.logout();
    },duration*1000)

}

private saveAuthData(token:string ,expirationDate:Date,userId:Object){
    localStorage.setItem('token',token);
    localStorage.setItem('expiration',expirationDate.toISOString());
    localStorage.setItem('userId',JSON.stringify(userId));

}
private clearAuthData(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    
}

private getAuthData(){
    const token=localStorage.getItem("token");
    const expirationDate=localStorage.getItem("expiration");
  
    if(token||!expirationDate){
  
        return{token:token,expirationDate:new Date(expirationDate)};
    }  
}




college(){
    return this.http.get(this.clgURl,{responseType:'text'}).pipe(
        map(result=>{
            let data:GlobalData[]=[]
            let raw={}
            
        
            let rows=result.split('\n');
            rows.splice(0,1);
           
            rows.forEach(row=>{
                let cols=row.split(/,(?=\S)/)
           
               let cs={
                college:cols[2],
               
            };
            let temp=raw[cs.college];
            if(temp){
                raw[cs.college]=cs;
            }
            else{
                raw[cs.college]=cs;
            }
           
               

                
            })
            console.log(raw);
            
            
        return <GlobalData[]>Object.values(raw);
            
    }))
}

getPractice():Observable<GlobalPracticeSummary[]>{
    return this.http.get<GlobalPracticeSummary[]>('apiPractice/practice');
   
}

getSolve():Observable<GlobalPracticeTest[]>{
    if(this.id==null){
        this.id=localStorage.getItem('id');

    }
    return this.http.get<GlobalPracticeTest[]>('apiPractice/'+this.id)
}

getElement(id:string){
    this.id=id;
    this.savepracticetest(this.id);
    
}
savepracticetest(id:string){
    localStorage.setItem('id',id);
    
}

getstatusbar(message:string){
    this.message=message;
    localStorage.setItem('message',message)
}
getstatusbar_1():Observable<GlobalPracticeTest[]>{
    if(this.message==null){
        this.message=localStorage.getItem('message');
    }

    return of(this.message);
}

getUsername():Observable<GlobalUserData[]>{
        if(this.userId==null){
           
         this.userId=JSON.parse(localStorage.getItem('userId'));
            return this.http.get<GlobalUserData[]>('apiStudentDashboard/profile/'+this.userId);
        }

        else{
            return this.http.get<GlobalUserData[]>('apiStudentDashboard/profile/'+this.userId);

        }
       
        
       

    }

   

   

}


