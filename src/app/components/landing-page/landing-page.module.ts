import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import {InfoComponent} from './info/info.component';



@NgModule({
  declarations: [
    LandingComponent,
    InfoComponent
  ],
  exports: [
    LandingComponent,
    InfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
