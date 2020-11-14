import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private display: BehaviorSubject<'open' | 'close'> = 
  new BehaviorSubject('close');

watch(): Observable<'open' | 'close'> {
return this.display.asObservable();
}

open() {
this.display.next('open');
}

close() {
this.display.next('close');
}
}
