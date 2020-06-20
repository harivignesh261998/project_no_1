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
import { ErrorComponent } from './components/error/error.component';
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
import { CountdownModule } from 'ngx-countdown';
import { PopupModule } from '@progress/kendo-angular-popup';








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
    ErrorComponent,
    DocsComponent,
    PortalComponent,
    AportalComponent,
    CportalComponent,
    CsolveComponent,
    AsolveComponent,
    InstructionsComponent,
    
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
    CountdownModule,
    PopupModule,
   
    


  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    {provide: HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},
    {provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,useClass:ErrorInterceptor,useValue:{duration:2500}},

  ],

  bootstrap: [AppComponent],
  entryComponents:[ErrorComponent]
})
export class AppModule { }
