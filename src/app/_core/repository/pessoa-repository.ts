import { BaseHttpService } from './../../_services/http/base-http.service';
import { environment } from '../../../environments/environment';
import { PessoaMapper } from './../mapper/pessoa-mapper';
import { PessoaEntity} from './../entity/pessoa-entity';
import { PessoaModel} from './../model/pessoa-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class PessoaRepository {

    mapper = new PessoaMapper();


    constructor(public http: BaseHttpService) { }

    getPessoaById(id: number): Observable<PessoaModel> {
        return this.http
            .getAll<PessoaModel>(`${environment.URLSERVIDOR}pessoa/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getAllPessoas(): Observable<PessoaModel> {
        return this.http
            .getAll<PessoaEntity[]>(`${environment.URLSERVIDOR}pessoa`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.mapper.mapFrom(x)));
    }


    postPessoa(param: PessoaModel) {
        return this.http
            .post<PessoaEntity>(`${environment.URLSERVIDOR}pessoa`, this.mapper.mapTo(param))
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    postImagem(param: any) {
        return this.http.post(`${environment.URLSERVIDOR}imagem`, param);
            
    }

    putPessoa(param: PessoaModel) {
        return this.http
            .put<void>(
                `${environment.URLSERVIDOR}Pessoa/${param.id}`,
                this.mapper.mapTo(param)
            )
            .pipe(map((x) => x.data));
    }

    deletePessoa(id: number): Observable<void> {
        return this.http
            .delete<void>(`${environment.URLSERVIDOR}pessoa/${id}`, id)
            .pipe(map((x) => x.data));
    }
}
