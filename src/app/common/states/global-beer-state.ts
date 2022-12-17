import { InjectionToken } from "@angular/core";
import { RxState } from "@rx-angular/state";
import { Beer } from "../models";

export interface GlobalBeerState{
    beersToDisplay: Beer[] | null;
    allBeers: Beer[] | null;
    filteredBeers: Beer[] | null;
    sortedBeersAsc: Beer[] | null;
    sortedBeersDesc: Beer[] | null;
}

export const GLOBAL_BEER_STATE = new InjectionToken<RxState<GlobalBeerState>>('GLOBAL_BEER_STATE');