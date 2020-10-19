import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaDataService {
  
  constructor() { }
  //Using any
  public PessoaData: any = [];
  private messageSourcePessoa = new  BehaviorSubject(this.PessoaData);
  public currentMessagePessoa = this.messageSourcePessoa.asObservable()

  changeMessage(message: string) {
  this.messageSourcePessoa.next(message)

}


}

  