import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { MaterialModule } from '../material/material.module';
import { DevAnimationComponent } from './components/dev-animation/dev-animation.component';




@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    MyProjectsComponent,
    ContactMeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    DevAnimationComponent
  ]
})
export class DashboardModule { }
