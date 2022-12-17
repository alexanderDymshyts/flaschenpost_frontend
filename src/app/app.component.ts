import { Component, Inject } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { map, tap } from 'rxjs';
import { BeerService } from './common/services';
import { GlobalBeerState, GLOBAL_BEER_STATE } from './common/states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flaschenpost';

  public isFilteredCacheVisible$ = this.state.select('filteredBeers').pipe(
    map(beers => beers === null? false : beers.length > 0),
    tap(x => console.log(x))
  );

  constructor(@Inject(GLOBAL_BEER_STATE) private state: RxState<GlobalBeerState>, private beerService: BeerService) {
    /* Fetch beers from backend */
    this.state.connect("allBeers", this.beerService.getAllBeer$().pipe(
      tap(beers => this.state.set({ beersToDisplay: beers}))
    ));
  } 

  public onSortClick(){
    console.log('sorted');
  }

   public onFilterClick(){
    this.state.connect("filteredBeers", this.beerService.getFiltered$().pipe(
      tap(beers => this.state.set({ beersToDisplay: beers}))
    ));
  }

  public onFilterCacheClick(){
    this.state.connect("beersToDisplay", this.state.select('filteredBeers'));    
  }

  public onFilterCacheClearClick(){
    this.state.set({ filteredBeers: null});
  }
}
