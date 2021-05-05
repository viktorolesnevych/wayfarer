import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities/cities.component';
import { CityInfoComponent } from './city-info/city-info.component';
import { PostsComponent } from './posts/posts.component';
import { HomePageComponent } from './home-page.component';
import { RedHoverDirective } from './red-hover.directive';
import {AppRoutingModule} from '../../app-routing.module';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    CitiesComponent,
    CityInfoComponent,
    PostsComponent,
    HomePageComponent,
    RedHoverDirective,
    PostComponent,
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class HomePageModule { }
