import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDemoComponent } from './demo/form-demo/form-demo.component';

const routes: Routes = [
  { path: '', component: FormDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
