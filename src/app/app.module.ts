import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MetarialModule } from "./metarial/metarial.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { EmployeeService } from './shared/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MetarialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
