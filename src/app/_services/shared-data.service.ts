import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  
  constructor() { }
  //Using any
  public editDataDetails: any = [];
  private messageSource = new  BehaviorSubject(this.editDataDetails);
  public currentMessage = this.messageSource.asObservable()

  changeMessage(message: string) {
  this.messageSource.next(message)

}


}

  