import { EstadoEntity } from './../entity/estado-entity';
import { CidadeEntity } from './../entity/cidade-entity';
import { EstadoModel } from './../model/estado-model';
import { EstadoMapper } from './../mapper/estado-mapper';
import { CidadeModel } from './../model/cidade-model';
import { CidadeMapper } from './../mapper/cidade-mapper';
import { BaseHttpService } from './../../_services/http/base-http.service';
import { environment } from './../../../environments/environment';
import { EnderecoMapper } from './../mapper/endereco-mapper';
import { EnderecoEntity } from './../entity/endereco-entity';
import { EnderecoModel} from './../model/endereco-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class EnderecoRepository {

    mapper = new EnderecoMapper();
    mapperEstado = new EstadoMapper();
    mapperCidade = new CidadeMapper();

    constructor(public http: BaseHttpService) { }

    getEnderecoById(id: number): Observable<EnderecoModel> {
        return this.http
            .getAll<EnderecoModel>(`${environment.URLSERVIDOR}endereco/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getAllEnderecos(): Observable<EnderecoModel> {
        return this.http
            .getAll<EnderecoEntity[]>(`${environment.URLSERVIDOR}endereco`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.mapper.mapFrom(x)));
    }

    getAllEstados(): Observable<EstadoModel> {
        return this.http
            .getAll<EstadoEntity[]>(`${environment.URLSERVIDOR}estado`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.mapperEstado.mapFrom(x)));
    }
    
    getAllCidadesByEstado(id: number): Observable<CidadeModel> {
        return this.http
            .getAll<CidadeEntity[]>(`${environment.URLSERVIDOR}estado/${id}/cidades`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.mapperCidade.mapFrom(x)));
    }

    postEndereco(param: EnderecoModel) {
        return this.http
            .post<EnderecoEntity>(`${environment.URLSERVIDOR}endereco`, this.mapper.mapTo(param))
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    // putEndereco(param: EnderecoModel) {
    //     return this.http
    //         .put<void>(
    //             `${environment.URLSERVIDOR}endereco/${param.id}`,
    //             this.mapper.mapTo(param)
    //         )
    //         .pipe(map((x) => x.data));
    // }

    deleteEndereco(id: number): Observable<void> {
        return this.http
            .delete<void>(`${environment.URLSERVIDOR}endereco/${id}`, id)
            .pipe(map((x) => x.data));
    }
}
