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
  resultPostsDates: string[];
  message: string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.changeMessage('');
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.sortPostsByDate();
    this.getCreatedDate(this.currentCity.posts);
  }

  getCreatedDate(posts: Post[]): void{
    this.resultPostsDates = [];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const today = new Date();
    console.log('DATE: ' + today.getUTCMinutes() + ':' + today.getUTCSeconds());
    posts.forEach(post => {
      const created = new Date(post.dateCreated);
      if (created.getFullYear() === today.getFullYear()){
      if (created.getMonth() === today.getMonth()){
        this.resultPostsDates.push(`${(today.getDay() - created.getDay())} days ago`);
      }else{
        this.resultPostsDates.push(`${(today.getMonth() - created.getMonth())} months ago`);
      }
    }else{
        this.resultPostsDates.push(`${monthNames[created.getMonth() - 1]} ${created.getDay()}, ${created.getFullYear()}`);
    }
  });
  }
  // sorts post by date
  sortPostsByDate(): void{
    this.currentCity.posts.sort( (a, b) => {
      const aDate = new Date(a.dateCreated);
      const bDate = new Date(b.dateCreated);
      console.log(`A TIME: ${aDate.getTime()}`);
      console.log(`B TIME: ${bDate.getTime()}`);
      if (aDate.getTime() > bDate.getTime()){
        return -1;
      }
      else{
        return 1;
      }
    });
  }
}
