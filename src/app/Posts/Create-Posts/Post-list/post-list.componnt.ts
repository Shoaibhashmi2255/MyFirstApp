import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription, subscribeOn } from "rxjs";
import { PostService } from "../../posts.service";
export interface post {
    title: string;
    content: string;
  }
@Component ({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class postslist implements OnInit, OnDestroy {
//     posts= [
//         {title:'First ', content:'This is the First Post\'s Content'},
//         {title:'Second ', content:'This is the Second Post\'s Content'},
//         {title:'Third ', content:'This is the Third Post\'s Content'}

//    ];
  posts:post[]=[];
  private postsSub: Subscription = new Subscription();

 constructor(public postService: PostService){ }

 ngOnInit(): void {
   this.posts= this.postService.getPosts();
  this.postsSub = this.postService.getPostlistiener().subscribe((posts:post[])=>{
    this.posts= posts;
   });
 }
 ngOnDestroy(): void {
   this.postsSub.unsubscribe();
 }
 
}