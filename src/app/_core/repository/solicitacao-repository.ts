import { BaseHttpService } from '../../_services/http/base-http.service';
import { environment } from '../../../environments/environment';
import { SolicitacaoMapper } from '../mapper/solicitacao-mapper';
import { SolicitacaoEntity } from '../entity/solicitacao-entity';
import { SolicitacaoModel, } from '../model/solicitacao-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class SolicitacaoRepository {

    mapper = new SolicitacaoMapper();
  

    constructor(public http: BaseHttpService) { }

    getSolicitacaoById(id: number): Observable<SolicitacaoModel> {
        return this.http
            .getAll<SolicitacaoModel>(`${environment.URLSERVIDOR}solicitacao/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getAllSolicitacoes(): Observable<SolicitacaoModel> {
        return this.http
            .getAll<SolicitacaoEntity[]>(`${environment.URLSERVIDOR}solicitacao/instituicao`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.mapper.mapFrom(x)));
    }

    getAllSolicitacoesPessoa(): Observable<SolicitacaoModel> {
        return this.http
            .getAll<SolicitacaoEntity[]>(`${environment.URLSERVIDOR}solicitacao/pessoa`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.mapper.mapFrom(x)));
    }

    async getAllSolicitacoesPessoaPromise(): Promise<SolicitacaoModel[]> {
        const x = await this.http
            .getAll<SolicitacaoEntity[]>(`${environment.URLSERVIDOR}solicitacao/pessoa`)    
            .toPromise();
        return x.data.map(this.mapper.mapFrom);
    }
  
    postSolicitacao(param: SolicitacaoModel) {
        return this.http
            .post<SolicitacaoEntity>(`${environment.URLSERVIDOR}solicitacao`, this.mapper.mapTo(param))
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    putSolicitacao(param: SolicitacaoModel) {
        return this.http
            .put<void>(
                `${environment.URLSERVIDOR}solicitacao/${param.id}`,
                this.mapper.mapTo(param)
            )
            .pipe(map((x) => x.data));
    }

    deleteSolicitacao(id: number): Observable<void> {
        return this.http
            .delete<void>(`${environment.URLSERVIDOR}solicitacao/${id}`, id)
            .pipe(map((x) => x.data));
    }
}
