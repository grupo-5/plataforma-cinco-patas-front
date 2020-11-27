import { HttpClient } from '@angular/common/http';
import { InstituicaoModel } from './../model/instituicao-model';
import { BaseHttpService } from './../../_services/http/base-http.service';
import { environment } from './../../../environments/environment';
import { InstituicaoMapper } from './../mapper/instituicao-mapper';
import { InstituicaoEntity } from './../entity/instituicao-entity';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InstituicaoRepository {
  mapper = new InstituicaoMapper();

  constructor(public http: BaseHttpService, public httpCli: HttpClient) { }

  getInstituicaoById(id: number): Observable<InstituicaoModel> {
    return this.http
      .getAll<InstituicaoModel>(`${environment.URLSERVIDOR}instituicao/${id}`)
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  async getAllInstituicoes(): Promise<InstituicaoModel[]> {
    const x = await this.http
      .getAll<InstituicaoEntity[]>(`${environment.URLSERVIDOR}insti`)
      .toPromise();
    return x.data.map(this.mapper.mapFrom);
  }

  async getAllInstituicoesSemToken(): Promise<InstituicaoModel[]> {
    const x = await this.httpCli
      .get<InstituicaoEntity[]>(`${environment.URLSERVIDOR}insti`)
      .toPromise();
    return x.map(this.mapper.mapFrom);
  }

  async getInstituicoesCidadeSemToken(id: number): Promise<InstituicaoModel[]> {
    const x = await this.httpCli
      .get<InstituicaoEntity[]>(`${environment.URLSERVIDOR}insti/${id}/cidade`)
      .toPromise();
    return x.map(this.mapper.mapFrom);
  }

  async getInstituicoesEstadoSemToken(id: number): Promise<InstituicaoModel[]> {
    const x = await this.httpCli
      .get<InstituicaoEntity[]>(`${environment.URLSERVIDOR}insti/estado/${id}`)
      .toPromise();
    return x.map(this.mapper.mapFrom);
  }

  async getInstituicoesCidade(id: number): Promise<InstituicaoModel[]> {
    const x = await this.http
      .getAll<InstituicaoEntity[]>(`${environment.URLSERVIDOR}insti/${id}/cidade`)
      .toPromise();
    return x.data.map(this.mapper.mapFrom);
  }

  async getInstituicoesEstado(id: number): Promise<InstituicaoModel[]> {
    const x = await this.http
      .getAll<InstituicaoEntity[]>(`${environment.URLSERVIDOR}insti/estado/${id}`)
      .toPromise();
    return x.data.map(this.mapper.mapFrom);
  }

  postInstituicao(param: InstituicaoModel) {
    return this.http
      .post<InstituicaoEntity>(
        `${environment.URLSERVIDOR}instituicao`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  putInstituicao(param: InstituicaoModel) {
    return this.http
      .put<void>(
        `${environment.URLSERVIDOR}instituicao`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => x.data));
  }

  postImagem(param: any) {
    return this.http.post(`${environment.URLSERVIDOR}imagem`, param);

  }

  deleteCliente(id: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.URLSERVIDOR}instituicao/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
