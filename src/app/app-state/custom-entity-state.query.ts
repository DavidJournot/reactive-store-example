import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CustomEntityState, CustomEntity, CustomEntityStateStore } from './custom-entity-state.store';

@Injectable()
export class CustomEntityStateQuery extends QueryEntity<CustomEntityState, CustomEntity> {

  constructor(protected store: CustomEntityStateStore) {
    super(store);
  }

}