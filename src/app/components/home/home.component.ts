import { Component, OnInit } from "@angular/core";
import { RxState } from "@rx-angular/state";
import { tap } from "rxjs/operators";
import { BeerService } from "src/app/common/services";
import { HomeState } from "src/app/common/states";

@Component({
    selector: 'flaschenpost-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.html'],
    providers: [RxState],
})
export class HomeComponent implements OnInit{

    public beers$ = this.state.select('beers').pipe(
        tap(x => console.log('data came...'))
    );

    constructor(
        private readonly beerService: BeerService, 
        private readonly state: RxState<HomeState>  ){}
    
    ngOnInit(): void {   
        this.state.hold(
            this.beerService.getAllBeer$().pipe(
                tap(result => this.state.set({ beers: result }))                
            )
        );  
    }    
}