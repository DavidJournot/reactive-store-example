import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomEntityStateQuery } from './app-state/custom-entity-state.query';
import { CustomEntityStateService } from './app-state/custom-entity-state.service';
import { CustomEntityStateStore } from './app-state/custom-entity-state.store';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CustomEntityStateService,
    CustomEntityStateQuery,
    CustomEntityStateStore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
