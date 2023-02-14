import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuadresComponent } from './Projecte/Components/quadres/quadres.component';

const routes: Routes = [
  { path: 'quadre', component: QuadresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
