import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";

import { HomeComponent } from "./home.component";
import { homeRoutingModule } from "./home.routing";
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule,
        homeRoutingModule,
        FormsModule,
        CommonModule
    ],
    exports: [],
    entryComponents: [],
    bootstrap: [HomeComponent]
})

export class homeModule {}