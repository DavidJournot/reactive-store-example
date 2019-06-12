import { Injectable } from "@angular/core";
import { exhaustMap, takeUntil, tap } from 'rxjs/operators';
import { CustomEntityStateQuery } from 'src/app/app-state/custom-entity-state.query';
import { DerivedEntityStateQuery } from './derived-entity-state.query';
import { DerivedEntityStateStore, DerivedEntity } from './derived-entity-state.store';
import { ChildLifeCycleHooksService } from '../child-life-cyle-hooks.service';

@Injectable()
export class DerivedEntityStateService {

    constructor(
        public query: DerivedEntityStateQuery,
        public store: DerivedEntityStateStore,
        private customEntityStateQuery: CustomEntityStateQuery,
        private childLifeCycleHooksService: ChildLifeCycleHooksService,
    ){

        // starts listening onInit and unsubscribe on destroy
        this.childLifeCycleHooksService.onInit$.pipe(
            exhaustMap(()=>this.listenToAppState$()),
            takeUntil(this.childLifeCycleHooksService.onDestroy$)
        ).subscribe();

    }

    listenToAppState$(){
        // this observe creates derived entities from custom entities
        // not optimised, serves only as example!
        return this.customEntityStateQuery.selectAll().pipe(
            tap((customEntities)=>{
                const derivedEntities: DerivedEntity[] = [];
                customEntities.forEach((custom)=>{
                    derivedEntities.push({
                        id: custom.id,
                        sumValue: custom.exampleValue1 + custom.exampleValue2
                    })
                })
                this.store.set(derivedEntities);
            })
        )
    }
    
}