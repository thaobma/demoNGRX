import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ItemRoutingModule } from "./item-routing.module";
import { ItemComponent } from "./item.component";
import { StoreModule } from "@ngrx/store";
import { itemReducer } from "./reducers/item.reducer";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ItemRoutingModule,
        StoreModule.forFeature("items", itemReducer)
    ],
    declarations: [
        ItemComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ItemModule { }
