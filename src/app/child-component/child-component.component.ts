import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DerivedEntityStateQuery } from './child-component-state/derived-entity-state.query';
import { DerivedEntityStateService } from './child-component-state/derived-entity-state.service';
import { DerivedEntityStateStore } from './child-component-state/derived-entity-state.store';
import { ChildLifeCycleHooksService } from './child-life-cyle-hooks.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  providers:[
    DerivedEntityStateService,
    DerivedEntityStateQuery,
    DerivedEntityStateStore,
    ChildLifeCycleHooksService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponentComponent implements OnInit, OnDestroy {

  derivedEntities$ = this.derivedEntityStateService.query.selectAll();

  constructor(
    private derivedEntityStateService: DerivedEntityStateService,
    private childLifeCycleHooksService: ChildLifeCycleHooksService,
  ) {}

  ngOnInit(){
    this.childLifeCycleHooksService.init();
  }

  ngOnDestroy(){
    this.childLifeCycleHooksService.destroy();
  }

}
