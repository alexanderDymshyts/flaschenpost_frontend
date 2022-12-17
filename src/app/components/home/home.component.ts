import { Component, Inject, OnInit } from "@angular/core";
import { RxState } from "@rx-angular/state";
import { GlobalBeerState, GLOBAL_BEER_STATE, HomeState } from "src/app/common/states";

@Component({
    selector: 'flaschenpost-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends RxState<HomeState> implements OnInit{

    public beersToShow$ = this.globalState.select('allBeers');

    constructor(@Inject(GLOBAL_BEER_STATE) private globalState: RxState<GlobalBeerState>){
        super();
    }
    
    ngOnInit(): void {                   
    }    
}