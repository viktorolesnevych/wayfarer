import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Post} from '../../../models/Post';
import {City} from '../../../models/City';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnChanges {
  @Input()
  currentCity: City;

  displayedPosts: Post[];
  resultPostsDates: string[];
  message: string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => {
      this.message = message;
      if (this.message) {
        this.displayedPosts = [...this.currentCity.posts.filter(post =>
          post.title.toLowerCase().includes(this.message) || post.description.toLowerCase().includes(this.message))];
      }
      else{
        this.displayedPosts = [...this.currentCity.posts];
        }
    });
    this.data.changeMessage('');
  }
  // basically using to update VIEW when changing the city
  ngOnChanges(changes: SimpleChanges): void {
    this.sortPostsByDate(); // sorting post when changing city
    this.getCreatedDate(this.currentCity.posts); // to change -created on- text when changing city
    this.data.changeMessage(''); // to clear -searching for- text when changing city
    // this.showPostByLength();
  }

  showPostByLength(): void{
    this.displayedPosts.forEach(post1 => {
      if (post1.description.length > 150){
        post1.description = `${post1.description.substring(0, 149)}.......`;
      }
    }); // checking for post length (if more then 150 displaying description till 150th letter)
    console.log(`DISPLAY: ${this.displayedPosts[0].description.toString()}`);
    console.log(`ACTUAL: ${this.currentCity.posts[0].description.toString()}`);
  }

  // Forms new array with easy to understand (2 days ago) dates
  getCreatedDate(posts: Post[]): void{
    this.resultPostsDates = [];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const today = new Date();
    posts.forEach(post => {
      const created = new Date(post.dateCreated);
      if (created.getFullYear() === today.getFullYear()){
      if (created.getMonth() === today.getMonth()){
        this.resultPostsDates.push(`${(today.getDay() - created.getDay())} days ago`);
      }else{
        this.resultPostsDates.push(`${(today.getMonth() - created.getMonth())} months ago`);
      }
    }else{
        this.resultPostsDates.push(`${monthNames[created.getMonth()]} ${created.getDate()}, ${created.getFullYear()}`);
    }
  });
  }
  // sorts post by date
  sortPostsByDate(): void{
    this.currentCity.posts.sort( (a, b) => {
      const aDate = new Date(a.dateCreated);
      const bDate = new Date(b.dateCreated);
      if (aDate.getTime() > bDate.getTime()){
        return -1;
      }
      else{
        return 1;
      }
    });
  }
}
