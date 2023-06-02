import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'home',
        component: HomeComponent,
      },
      {
        path:'about-me',
        component: AboutMeComponent,
      },
      {
        path:'projects',
        component: MyProjectsComponent,
      },
      {
        path:'contact',
        component: ContactMeComponent,
      },
      {
        path:'**',
        redirectTo:'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
