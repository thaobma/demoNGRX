import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as itemActions from "./actions/item.action";
import * as fromItems from "./reducers/item.reducer";
import { ItemState } from "./state/item.state";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./item.component.html",
})
export class ItemComponent implements OnInit {
    showLabel: boolean;

    constructor(private store: Store<ItemState>) {
    };

    ngOnInit(): void {
        var self = this;
        self.store.pipe(select(fromItems.getShowLabel))
            .subscribe(showLabel => {
                self.showLabel = showLabel;
            });
    };

    onSwitchChecked(args){
        this.store.dispatch(new itemActions.ToggleItemLabel(args.object.checked));
    };

}