import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { NgParticlesModule } from "ng-particles";
import { ChatBotGptComponent } from './dashboard/components/chat-bot-gpt/chat-bot-gpt.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    NgParticlesModule,
    ChatBotGptComponent
  ],
  exports:[
    SideMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
