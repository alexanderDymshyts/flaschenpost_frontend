import { Component, Input, OnInit } from "@angular/core";
import { RxState } from "@rx-angular/state";
import { Beer } from "src/app/common/models";
import { BeerCardState } from "src/app/common/states";

@Component({
    selector: 'flaschenpost-beer-card',
    templateUrl: './beer-card.component.html',
    styleUrls: ['./beer-card.component.scss'],
    providers: [RxState],
})
export class BeerCardComponent{
    @Input() set beer(incomingBeer: Beer) {
        this.state.set({ beer: incomingBeer});
    }

    public beer$ = this.state.select('beer');    

    constructor(private readonly state: RxState<BeerCardState>){}
}