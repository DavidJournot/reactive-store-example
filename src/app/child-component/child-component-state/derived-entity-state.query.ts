import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { DerivedEntityState, DerivedEntity, DerivedEntityStateStore } from './derived-entity-state.store';

@Injectable()
export class DerivedEntityStateQuery extends QueryEntity<DerivedEntityState, DerivedEntity> {

  constructor(protected store: DerivedEntityStateStore) {
    super(store);
  }

}