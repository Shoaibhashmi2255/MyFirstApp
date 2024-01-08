import { Component } from '@angular/core';
import { post } from './Posts/Create-Posts/Post-list/post-list.componnt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts:post[] = [];
  onPostCreated (post:post){
    this.storedPosts.push(post);
  }

}
