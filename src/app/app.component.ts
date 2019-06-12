import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CustomEntityStateService } from './app-state/custom-entity-state.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'reactiveStoreExample';

  customEntities$ = this.customEntityStateService.query.selectAll();

  private showChildComponentSubject = new BehaviorSubject<boolean>(false);
  showChildComponent$ = this.showChildComponentSubject.asObservable();

  constructor(
    private customEntityStateService: CustomEntityStateService
  ){}

  ngOnInit(){

    // Put some data in the store
    this.customEntityStateService.set([
      {id: 0, exampleValue1: 5, exampleValue2: 10},
      {id: 1, exampleValue1: 15, exampleValue2: 20},
      {id: 2, exampleValue1: 25, exampleValue2: 20},
    ])

    // Simulate child component instanciation after 1 second
    setTimeout(() => {
      this.showChildComponentSubject.next(true);
    }, 1000);

    // Simulate child component destoyed after 3 second
    setTimeout(() => {
      this.showChildComponentSubject.next(false);
    }, 3000);

    // Simulate child component new instanciation after 5 second
    setTimeout(() => {
      this.showChildComponentSubject.next(true);
    }, 5000);

  }

}
