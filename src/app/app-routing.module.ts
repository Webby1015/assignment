import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';

const routes: Routes = [
  { path: '', component: Question1Component },
  { path: 'q2', component: Question2Component },
  { path: 'q3', component: Question3Component },
  { path: 'q4', component: Question4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
