import { ID, StoreConfig, EntityState, ActiveState, EntityStore } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface CustomEntity {
    id: ID,
    exampleValue1: number,
    exampleValue2: number
}

export interface CustomEntityState extends EntityState<CustomEntity>, ActiveState {}

@Injectable()
@StoreConfig({ name: 'customEntityStore' })
export class CustomEntityStateStore extends EntityStore<CustomEntityState, CustomEntity> {
  constructor() {
    super();
  }
}