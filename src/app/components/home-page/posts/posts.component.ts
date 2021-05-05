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
  constructor() { }

  ngOnInit(): void {
  }
  getCreatedDate(post: Post): string{
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const created = new Date(post.dateCreated);
    const today = new Date();
    if (created.getFullYear() === today.getFullYear()){
      if (created.getMonth() === today.getMonth()){
        return `${(today.getDay() - created.getDay())} days ago`;
      }else{
        return `${(today.getMonth() - created.getMonth())} months ago`;
      }
    }else{
      return `${monthNames[created.getMonth() - 1]} ${created.getDay()}, ${created.getFullYear()}`;
    }
  }
}
