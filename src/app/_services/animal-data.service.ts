import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalDataService {
  
  constructor() { }
  //Using any
  public animalData: any = [];
  private messageSourceAnimal = new  BehaviorSubject(this.animalData);
  public currentMessageAnimal = this.messageSourceAnimal.asObservable()

  changeMessage(message: string) {
  this.messageSourceAnimal.next(message)

}


}

  