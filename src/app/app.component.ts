import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts:any[]= [];
  onPostCreated (post:any){
    this.storedPosts.push(post)
  }

}
