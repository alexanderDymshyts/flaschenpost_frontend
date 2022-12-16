import { Component, Inject, InjectionToken } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { BeerService } from './common/services';
import { GlobalBeerState, GLOBAL_BEER_STATE } from './common/states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flaschenpost';

  constructor(@Inject(GLOBAL_BEER_STATE) private state: RxState<GlobalBeerState>, private beerService: BeerService) {
    /* Fetch tasks from backend */
    this.state.connect("allBeers", this.beerService.getAllBeer$());
  } 

  public onSortClick(){
    alert('Sort');
  }

   public onFilterClick(){
    alert('Filter');
  }
}
