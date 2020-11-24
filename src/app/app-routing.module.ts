import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnaahComponent } from './onaah/onaah.component'

const routes: Routes = [
	{ path: 'onaah', component: OnaahComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
