import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";
import { UserComponent } from "./user.component";
import { userRoutingModule } from "./user.routing";
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        SharedModule,
        userRoutingModule,
        FormsModule,
        CommonModule
    ],
    exports: [],
    entryComponents: [],
    bootstrap: [UserComponent]
})

export class userModule {}