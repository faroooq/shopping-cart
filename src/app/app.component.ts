import { Component, ViewEncapsulation } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'shopping-cart';

  constructor() {
    // using concatMap
    from([1, 2, 3, 4])
      .pipe(mergeMap((param) => this.getData(param)))
      .subscribe((val) => console.log('concatMap:', val));
  }

  getData = (param: any) => {
    // Here we can make API call. Just for now using random number to delay the response
    const delayTime = Math.floor(Math.random() * 10000) + 1;
    return of(
      `retrieved new data with params: ${param} and delay: ${delayTime}`
    ).pipe(delay(delayTime));
  };

}
