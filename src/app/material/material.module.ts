import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
