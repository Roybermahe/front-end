import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ListTweetsComponent } from "./listTweets/listTweets.component";
import { FormTweetComponent } from './formTweet/formTweet.component';
import { DataUserComponent } from './dataUser/dataUser.component'
@NgModule({
    declarations: [
        ListTweetsComponent,
        FormTweetComponent,
        DataUserComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ListTweetsComponent,
        FormTweetComponent,
        DataUserComponent
    ],
})

export class SharedModule {}