import { InjectionToken } from "@angular/core";
import { RxState } from "@rx-angular/state";
import { Beer } from "../models";

export interface GlobalBeerState{
    allBeers: Beer[];
    filteredBeers: Beer[];
    sortedBeers: Beer[];
}

export const GLOBAL_BEER_STATE = new InjectionToken<RxState<GlobalBeerState>>('GLOBAL_BEER_STATE');