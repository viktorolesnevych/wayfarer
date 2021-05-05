import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {CityInfoComponent} from './components/home-page/city-info/city-info.component';
import {PostComponent} from './components/home-page/post/post.component';

const routes: Routes = [{
  path: '',
  component: LandingPageComponent
},
  {
    path: 'cities',
    component: HomePageComponent,
    children: [
      {
        path: ':city-name',
        component: CityInfoComponent
      },
      {
        path: ':city-name/posts/:id',
        component: PostComponent
      }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
