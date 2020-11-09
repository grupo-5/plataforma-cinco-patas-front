import { SituacaoSolicitacaoEntity } from './../entity/situacao-solicitacao-entity';
import { SituacaoSolicitacaoModel } from './../model/situacao-solicitacao-model';
import { SituacaoSolicitacaoMapper } from './../mapper/situacao-solicitacao-mapper';

import { BaseHttpService } from '../../_services/http/base-http.service';
import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class SituacaoSolicitacaoRepository {

    mapper = new SituacaoSolicitacaoMapper();
  

    constructor(public http: BaseHttpService) { }

    getSituacaoSolicitacaoById(id: number): Observable<SituacaoSolicitacaoModel> {
        return this.http
            .getAll<SituacaoSolicitacaoModel>(`${environment.URLSERVIDOR}situacao/solicitacao/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getAllSituacaoSolicitacoes(): Observable<SituacaoSolicitacaoModel> {
        return this.http
            .getAll<SituacaoSolicitacaoEntity[]>(`${environment.URLSERVIDOR}situacao/solicitacao`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.mapper.mapFrom(x)));
    }

    // getAllSituacaoSolicitacoes(): Promise<SituacaoSolicitacaoModel[]> {
    //     return this.http
    //         .getAll<SituacaoSolicitacaoEntity[]>(`${environment.URLSERVIDOR}situacao/solicitacao`)
    //         .toPromise().then(x => {
    //             return x.data.map(this.mapper.mapFrom);
    //         })
    // }

    postSituacaoSolicitacao(param: SituacaoSolicitacaoModel) {
        return this.http
            .post<SituacaoSolicitacaoEntity>(`${environment.URLSERVIDOR}situacao/solicitacao`, this.mapper.mapTo(param))
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }


    contSolicitacoesRecebidas(id: number): Observable<SituacaoSolicitacaoModel> {
        return this.http
            .getAll<SituacaoSolicitacaoModel>(`${environment.URLSERVIDOR}situacao/solicitacao/${id}/recebidas`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    // putSituacaoSolicitacao(param: SituacaoSolicitacaoModel) {
    //     return this.http
    //         .put<void>(
    //             `${environment.URLSERVIDOR}situacao/solicitacao/${param.id}`,
    //             this.mapper.mapTo(param)
    //         )
    //         .pipe(map((x) => x.data));
    // }

    // deleteSituacaoSolicitacao(id: number): Observable<void> {
    //     return this.http
    //         .delete<void>(`${environment.URLSERVIDOR}situacao/solicitacao/${id}`, id)
    //         .pipe(map((x) => x.data));
    // }
    
}
