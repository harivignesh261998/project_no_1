import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PracticeComponent } from './components/practice/practice.component';
import { TricksComponent } from './components/tricks/tricks.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LearningportalComponent } from './components/learningportal/learningportal.component';
import { AgespartnersComponent } from './components/agespartners/agespartners.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PracticetestComponent } from './components/practicetest/practicetest.component';
import { SolveComponent } from './components/solve/solve.component'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms' 
import {RouterModule,Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'
import { MatToolbarModule} from '@angular/material/toolbar'
import {MatMenuModule, MatMenu} from '@angular/material/menu'; 
import {MatIconModule} from '@angular/material/icon' ;
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule}  from '@angular/material/input'
import {MatTabsModule} from '@angular/material/tabs'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import { ClockcalComponent } from './components/clockcal/clockcal.component'
import { AuthInterceptor } from './auth-interceptor';
import {ErrorInterceptor} from './error-interceptor';
import {MatDialogModule} from '@angular/material/dialog';

import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import { DocsComponent } from './components/docs/docs.component';
import {MatSelectModule} from '@angular/material/select'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PortalComponent } from './components/portal/portal.component';
import { AportalComponent } from './components/aportal/aportal.component';
import { CportalComponent } from './components/cportal/cportal.component';
import { CsolveComponent } from './components/csolve/csolve.component';
import { AsolveComponent } from './components/asolve/asolve.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { TestresultComponent } from './components/testresult/testresult.component'
import {MatExpansionModule} from '@angular/material/expansion';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NotifierModule, NotifierOptions } from "angular-notifier";
import { AcportalComponent } from './components/acportal/acportal.component';
import { AcsolveComponent } from './components/acsolve/acsolve.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { NgxLoadingModule } from 'ngx-loading';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';


import {MatListModule} from '@angular/material/list';
import { PasswordComponent } from './components/password/password.component';

import { NgOtpInputModule } from  'ng-otp-input';

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 600
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: "material",
  behaviour: {
    autoHide: 2500,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
   showDismissButton: false,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PracticeComponent,
    TricksComponent,
    LeaderboardComponent,
    ProfileComponent,
    LearningportalComponent,
    AgespartnersComponent,
    LoginComponent,
    RegisterComponent,
    PracticetestComponent,
    SolveComponent,
    ClockcalComponent,
    
    DocsComponent,
    PortalComponent,
    AportalComponent,
    CportalComponent,
    CsolveComponent,
    AsolveComponent,
    InstructionsComponent,
    TestresultComponent,
    AcportalComponent,
    AcsolveComponent,
    PasswordComponent,
    
    
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatAutocompleteModule,
    
    //NgbModule,
    MatExpansionModule,
    Ng2GoogleChartsModule,
    NgCircleProgressModule.forRoot({
      
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      showSubtitle: false,
      animationDuration: 300,
      startFromZero: false
      
    }),
    NotifierModule.withConfig(customNotifierOptions),
    NgxLoadingModule.forRoot({}),
    CalendarModule,
    MatBottomSheetModule,
    MatListModule,
    NgOtpInputModule,
    
    
    
    
    
    
    


  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    {provide: HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},
   
    

  ],

  bootstrap: [AppComponent],
  entryComponents:[PasswordComponent]
})
export class AppModule { }
