import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoDataService {

  constructor() { }

    //Using any
    public instituicaoData: any = [];
    private messageSourceInstituicao = new  BehaviorSubject(this.instituicaoData);
    public currentMessageInstituicao = this.messageSourceInstituicao.asObservable()
  
    changeMessage(message: string) {
    this.messageSourceInstituicao.next(message)
    }
  
}
  