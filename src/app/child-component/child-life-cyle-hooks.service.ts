import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class ChildLifeCycleHooksService {

    private onInitSubject = new Subject<any>();
    onInit$ = this.onInitSubject.asObservable();

    private onDestroySubject = new Subject<any>();
    onDestroy$ = this.onDestroySubject.asObservable();

    init(){
        this.onInitSubject.next();
    }

    destroy(){
        this.onDestroySubject.next();
    }
}