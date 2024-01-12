import { Component, } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostService } from "../posts.service";
@Component ({
    selector : 'CreatepostsComponent', 
    templateUrl : './Create-posts.component.html', 
    styleUrls : ['./Create-Posts.compnent.css'],
  
})
export class createpostscomponent {
    newuserTitle = '';
    newuserContent = '';

    constructor(public postService: PostService){} 
    onClickDisplay (form:NgForm) {  
        if (form.invalid){
            return;
        }

        this.postService.AddPost(form.value.title, form.value.content)

        form.resetForm();
    }
}
