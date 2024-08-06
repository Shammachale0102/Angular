import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { PipecompComponent } from './pipecomp/pipecomp.component';
import { PowerPipe } from './power.pipe';
import { GenPipe } from './gen.pipe';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RoutingCompComponent } from './routing-comp/routing-comp.component';
import { ServiceCompComponent } from './service-comp/service-comp.component';
import { ACompComponent } from './acomp/acomp.component';
import { BCompComponent } from './bcomp/bcomp.component';
import { CCompComponent } from './ccomp/ccomp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompComponent,
    DatabindingComponent,
    PipecompComponent,
    PowerPipe,
    GenPipe,
    StudentComponent,
    StudentDetailsComponent,
    StudentRegistrationComponent,
    AboutComponent,
    ContactComponent,
    RoutingCompComponent,
    ServiceCompComponent,
    ACompComponent,
    BCompComponent,
    CCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
