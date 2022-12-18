import { Component, Inject } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { combineLatest, map, tap } from 'rxjs';
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
  );

  public isSortedAscCacheVisible$ = this.state.select('sortedBeersAsc').pipe(
    map(beers => beers === null? false : beers.length > 0),
  );

  public isSortedDescCacheVisible$ = this.state.select('sortedBeersDesc').pipe(
    map(beers => beers === null? false : beers.length > 0),
  );

  public isSortedClearCacheVisible$ = combineLatest([this.isSortedAscCacheVisible$, this.isSortedDescCacheVisible$]).pipe(    
    map(combinedArray => (combinedArray[0] != null && combinedArray[0]) || (combinedArray[1] != null && combinedArray[1])),
  );

  constructor(@Inject(GLOBAL_BEER_STATE) private state: RxState<GlobalBeerState>, private beerService: BeerService) {
    /* Fetch all beers from backend */
    this.state.connect("allBeers", this.beerService.getAllBeer$().pipe(
      tap(beers => this.state.set({ beersToDisplay: beers}))
    ));

    this.state.set({
      sortedBeersAsc: null,
      sortedBeersDesc: null,
      filteredBeers: null,
    });
  } 

  public onSortAscClick(){
    this.state.connect("sortedBeersAsc", this.beerService.getBeerAsc$().pipe(
      tap(beers => this.state.set({ beersToDisplay: beers}))
    ));
  }

  public onSortAscCacheClick(){
    this.state.hold(this.state.select('sortedBeersAsc').pipe(
      tap(beers => this.state.set({beersToDisplay: beers}))
    ));   
  }

  public onSortDescClick(){
    this.state.connect("sortedBeersDesc", this.beerService.getBeerDesc$().pipe(
      tap(beers => this.state.set({ beersToDisplay: beers}))
    ));
  }

  public onSortDescCacheClick(){
    this.state.hold(this.state.select('sortedBeersDesc').pipe(
      tap(beers => this.state.set({beersToDisplay: beers}))
    ));   
  }

  public onSortCacheClearClick(){
    
    this.state.set({ sortedBeersAsc: null, sortedBeersDesc: null});
    this.state.hold(this.state.select('allBeers').pipe(
      tap(beers => this.state.set({ beersToDisplay: beers}))
    ));
  }

  public onFilterClick(){
    this.state.connect("filteredBeers", this.beerService.getFiltered$().pipe(
      tap(beers => this.state.set({ beersToDisplay: beers}))
    ));
  }

  public onFilterCacheClick(){
    this.state.hold(this.state.select('filteredBeers').pipe(
      tap(beers => this.state.set({beersToDisplay: beers}))
    ));    
  }

  public onFilterCacheClearClick(){    
    this.state.set({ filteredBeers: null });
    this.state.hold(this.state.select('allBeers').pipe(
      tap(beers => this.state.set({ beersToDisplay: beers}))
    ))
  }
}
