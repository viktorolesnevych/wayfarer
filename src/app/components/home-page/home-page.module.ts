import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities/cities.component';
import { CityInfoComponent } from './city-info/city-info.component';
import { PostsComponent } from './posts/posts.component';
import { HomePageComponent } from './home-page.component';



@NgModule({
  declarations: [
    CitiesComponent,
    CityInfoComponent,
    PostsComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
