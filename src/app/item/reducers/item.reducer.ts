import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ItemActionTypes, ItemActions } from "../actions/item.action";
import { ItemState } from "../state/item.state";

const initialState: ItemState = {
    showLabel: false
};
const getItemFeature = createFeatureSelector<ItemState>("items");

export const getShowLabel = createSelector(
    getItemFeature,
    state => state.showLabel
);

export function itemReducer(state = initialState, action: ItemActions) {
    switch (action.type) {
        case ItemActionTypes.ToggleItemLabel:
            return {
                ...state,
                showLabel: action.payload
            };
        default:
            return {
                state
            };
    };
};