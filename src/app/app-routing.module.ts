import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';

const routes: Routes = [{
  path: '',
  component: LandingPageComponent
},
  {
    path: 'cities',
    component: HomePageComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
