import { Animal } from './../_models/animal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const url = 'http://localhost:3000/animais/';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient,
   ) { }

  listar(): Observable<Animal[]> {
    //const configPrams = this.configService.configurarParametros(config);
    return this.http.get<Animal[]>(url);
  }

  visualizar(id: number): Observable<Animal> {
    return this.http.get<Animal>(url + id);
  }

  editar(animal: Animal): Observable<Animal> {
    return this.http.put<Animal>(url + animal.id, animal);
  }

  salvar(animal: Animal): Observable<Animal> {
    return this.http.post<any>(url, animal);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }
}
