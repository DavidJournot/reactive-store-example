import { ID, StoreConfig, EntityState, ActiveState, EntityStore } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface DerivedEntity {
    id: ID,
    sumValue: number,
}

export interface DerivedEntityState extends EntityState<DerivedEntity>, ActiveState {}

@Injectable()
@StoreConfig({ name: 'derivedEntityStore' })
export class DerivedEntityStateStore extends EntityStore<DerivedEntityState, DerivedEntity> {
  constructor() {
    super();
  }
}