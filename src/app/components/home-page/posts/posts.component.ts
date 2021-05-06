import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {City} from '../../../models/City';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  currentCity: City;
  resultPosts: string[];
  constructor() { }

  ngOnInit(): void {
    console.log('APP POSTS INIT');
    this.getCreatedDate(this.currentCity.posts);
    console.log('POSTS RESULT: ' + this.resultPosts);
  }
  getCreatedDate(posts: Post[]): void{
    this.resultPosts = [];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const today = new Date();
    console.log('DATE: ' + today.getUTCMinutes() + ':' + today.getUTCSeconds());
    posts.forEach(post => {
      const created = new Date(post.dateCreated);
      if (created.getFullYear() === today.getFullYear()){
      if (created.getMonth() === today.getMonth()){
        this.resultPosts.push(`${(today.getDay() - created.getDay())} days ago`);
      }else{
        this.resultPosts.push(`${(today.getMonth() - created.getMonth())} months ago`);
      }
    }else{
        this.resultPosts.push(`${monthNames[created.getMonth() - 1]} ${created.getDay()}, ${created.getFullYear()}`);
    }
  });
  }
}
