import { Ong } from '../_models/ong.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const url = 'http://localhost:3000/ongs/';
@Injectable({
  providedIn: 'root'
})
export class OngService {

  constructor(private http: HttpClient,
   ) { }

  listar(): Observable<Ong[]> {
    //const configPrams = this.configService.configurarParametros(config);
    return this.http.get<Ong[]>(url);
  }

  visualizar(id: number): Observable<Ong> {
    return this.http.get<Ong>(url + id);
  }

  editar(ong: Ong): Observable<Ong> {
    return this.http.put<Ong>(url + ong.id, ong);
  }

  salvar(ong: Ong): Observable<Ong> {
    return this.http.post<any>(url, ong);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }
}
