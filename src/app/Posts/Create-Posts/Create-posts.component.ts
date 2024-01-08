import { Component } from "@angular/core";
@Component ({
    selector : 'CreatepostsComponent', 
    templateUrl : './Create-posts.component.html', 
    styleUrls : ['./Create-Posts.compnent.css'],
   
})
export class createpostscomponent {
    newuserpost = '';
    userinput = '';
    onClickDisplay () { 
        // this.newuserpost ='Imm new here';
        this.newuserpost= this.userinput;
    }
}
