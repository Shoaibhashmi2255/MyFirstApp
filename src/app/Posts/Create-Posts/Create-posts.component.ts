import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component ({
    selector : 'CreatepostsComponent', 
    templateUrl : './Create-posts.component.html', 
    styleUrls : ['./Create-Posts.compnent.css'],
  
})
export class createpostscomponent {
    newuserTitle = '';
    newuserContent = '';
    @Output() PostCreated = new EventEmitter();
 
 
    onClickDisplay (form:NgForm) {  
        if (form.invalid){
            return;
        }
        const posts = {
            title: form.value.title,
            content: form.value.content
        }
        this.PostCreated.emit(posts);
    }
}
