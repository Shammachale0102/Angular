import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ACompComponent } from './acomp/acomp.component';
import { BCompComponent } from './bcomp/bcomp.component';
import { ActivateRouteCompComponent } from './activate-route-comp/activate-route-comp.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path:'act',component:ActivateRouteCompComponent
  },
  {
    path:'detail/:id',component:ProductDetailComponent
  }
  /*{
    path:'a',component:ACompComponent
  },
  {
    path:'b',component:BCompComponent
  },
*/
];
  /*{
    path: 'student', component: StudentComponent
  },
  {
    path: 'stud_detail', component: StudentDetailsComponent
  },
  {
    path: 'studregi', component: StudentRegistrationComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'about', component: AboutComponent
  },
 
*/


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
