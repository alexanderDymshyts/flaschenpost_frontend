import { Component, Input, OnInit } from "@angular/core";
import { RxState } from "@rx-angular/state";
import { Beer } from "src/app/common/models";
import { BeerCardState } from "src/app/common/states";

@Component({
    selector: 'flaschenpost-beer-card',
    templateUrl: './beer-card.component.html',
    styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent extends RxState<BeerCardState>{
    @Input() set beer(incomingBeer: Beer) {
        this.set({ beer: incomingBeer});
    }

    public beer$ = this.select('beer'); 
}