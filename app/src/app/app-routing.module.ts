import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageFormComponent } from './landing-page-form/landing-page-form.component';


const routes: Routes = [
  {path:'' , component: LandingPageFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
