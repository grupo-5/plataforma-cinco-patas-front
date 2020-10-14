
import { BaseHttpService } from '../../_services/http/base-http.service';
import { environment } from '../../../environments/environment';
import { DepoimentoMapper } from '../mapper/depoimento-mapper';
import { DepoimentoEntity} from '../entity/depoimento-entity';
import { DepoimentoModel } from '../model/Depoimento-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DepoimentoRepository {

    mapper = new DepoimentoMapper();

    constructor(public http: BaseHttpService) { }

    getDepoimentoById(id: number): Observable<DepoimentoModel> {
        return this.http
            .getAll<DepoimentoModel>(`${environment.URLSERVIDOR}Depoimento/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getAllDepoimentos(): Observable<DepoimentoModel> {
        return this.http
            .getAll<DepoimentoEntity[]>(`${environment.URLSERVIDOR}Depoimento`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.mapper.mapFrom(x)));
    }

    postDepoimento(param: DepoimentoModel) {
        return this.http
            .post<DepoimentoEntity>(`${environment.URLSERVIDOR}Depoimento`, this.mapper.mapTo(param))
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    postImagem(param: any) {
        return this.http.post(`${environment.URLSERVIDOR}imagem`, param);
            
    }

    putDepoimento(param: DepoimentoModel) {
        return this.http
            .put<void>(
                `${environment.URLSERVIDOR}Depoimento/${param.id}`,
                this.mapper.mapTo(param)
            )
            .pipe(map((x) => x.data));
    }

    deleteDepoimento(id: number): Observable<void> {
        return this.http
            .delete<void>(`${environment.URLSERVIDOR}Depoimento/${id}`, id)
            .pipe(map((x) => x.data));
    }
}
