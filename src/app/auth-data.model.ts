export interface AuthData{
    firstName:string;
    lastName:string;
    mailId:string;
    password:string;
    collegeId:number;
    
}

export interface Auth{
    mailId:string;
    password:string;
}

export interface Update{
    testName:string;
    score:string;
    testId:string;
    attempt:boolean;
    date:Date;
    


}

