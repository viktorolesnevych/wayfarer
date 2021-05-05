import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  currentPosts: Post[];
  constructor() { }

  ngOnInit(): void {
  }

}
