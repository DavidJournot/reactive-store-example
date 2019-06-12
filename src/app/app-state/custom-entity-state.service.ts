import { Injectable } from "@angular/core";
import { CustomEntityStateQuery } from './custom-entity-state.query';
import { CustomEntityStateStore, CustomEntity } from './custom-entity-state.store';

@Injectable()
export class CustomEntityStateService {

    constructor(
        public query: CustomEntityStateQuery,
        public store: CustomEntityStateStore
    ){}

    set(entities: CustomEntity[]){
        this.store.set(entities);
    }
    
}