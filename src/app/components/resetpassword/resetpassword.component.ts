import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ConfirmedValidator } from 'src/app/cconfirm.validatior';
import { NotifierService } from 'angular-notifier';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
 token;
 loading;
 sent=false;
 form: FormGroup = new FormGroup({});
 private notifier: NotifierService;
  constructor(private router:Router,notifier: NotifierService,private fb: FormBuilder,public route:ActivatedRoute,private authService:AuthService) {
    this.notifier = notifier;
    this.form = fb.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    })
  }
    
  get f(){
    return this.form.controls;
  }
   
  submit(){
    this.loading=true;
    this.authService.updatePassword(this.token,this.form.value.password).subscribe((res)=>{
      if(res){
        this.loading=false;
        this.sent=true;
        this.notifier.notify('default','Password has been changed successfully');

        
    setTimeout(() => {
      this.router.navigate(['/login']);
  }, 2500);

      }
    });err=>{
      console.log(err);
    }
  }
   

      ngOnInit(){
        this.route.params.subscribe(params => {
        this.token=params.token
        console.log(this.token);
         
        });
    
      }
}
