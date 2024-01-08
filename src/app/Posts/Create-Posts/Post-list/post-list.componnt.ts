import { Component,Input } from "@angular/core";
export interface post {
    title: string;
    content: string;
  }
@Component ({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class postslist {
//     posts= [
//         {title:'First ', content:'This is the First Post\'s Content'},
//         {title:'Second ', content:'This is the Second Post\'s Content'},
//         {title:'Third ', content:'This is the Third Post\'s Content'}

//    ];
@Input() posts:post[]=[];
constructor(){
   
}
}