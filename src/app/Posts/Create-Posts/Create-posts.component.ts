import { Component, EventEmitter, Output } from "@angular/core";
@Component ({
    selector : 'CreatepostsComponent', 
    templateUrl : './Create-posts.component.html', 
    styleUrls : ['./Create-Posts.compnent.css'],
  
})
export class createpostscomponent {
    newuserTitle = '';
    newuserContent = '';
    @Output() PostCreated = new EventEmitter();
 
 
    onClickDisplay () { 
        const posts = {
            title: this.newuserTitle,
            content: this.newuserContent
        }
        this.PostCreated.emit(posts);
    }
}
