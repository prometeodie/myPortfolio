import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'portfolio',
    loadChildren: () =>import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path:'**',
    redirectTo:'portfolio',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
