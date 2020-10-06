import { Depoimento } from './../_models/depoimento.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const url = 'http://localhost:3000/depoimentos/';
@Injectable({
  providedIn: 'root'
})
export class DepoimentoService {

  constructor(private http: HttpClient,
   ) { }

  listar(): Observable<Depoimento[]> {
    //const configPrams = this.configService.configurarParametros(config);
    return this.http.get<Depoimento[]>(url);
  }

  visualizar(id: number): Observable<Depoimento> {
    return this.http.get<Depoimento>(url + id);
  }

  editar(depoimento: Depoimento): Observable<Depoimento> {
    return this.http.put<Depoimento>(url + depoimento.id, depoimento);
  }

  salvar(depoimento: Depoimento): Observable<Depoimento> {
    return this.http.post<any>(url, depoimento);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }
}
