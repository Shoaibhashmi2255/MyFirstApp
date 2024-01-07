import { Component } from "@angular/core";
@Component ({
    selector : 'CreatepostsComponent', 
    templateUrl : './Create-posts.component.html' 

})
export class createpostscomponent {
    newuserpost = 'No Content';
    userinput = '';
    onClickDisplay () { 
        // this.newuserpost ='Imm new here';
        this.newuserpost= this.userinput;
    }
}
