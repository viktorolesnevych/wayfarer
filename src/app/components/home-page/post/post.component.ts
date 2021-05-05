import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CityService} from '../../../services/city.service';
import {Post} from '../../../models/Post';
import {City} from '../../../models/City';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  city: City;
  post: Post;
  constructor(private route: ActivatedRoute, private cityService: CityService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
         this.cityService.getCities().forEach(city => {
          city.posts.forEach(post => {
            if (post.id === parseInt(params.get('id'), 10) ){
              this.post = post;
              this.city = city;
            }
          });
        });
      });
  }
}
