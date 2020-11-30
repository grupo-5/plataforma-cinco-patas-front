
import { BaseHttpService } from './../../_services/http/base-http.service';
import { environment } from '../../../environments/environment';
import { UsuarioMapper } from './../mapper/Usuario-mapper';
import { UsuarioEntity } from './../entity/Usuario-entity';
import { UsuarioModel} from './../model/Usuario-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UsuarioRepository {

    mapper = new UsuarioMapper();


    constructor(public http: BaseHttpService) { }

    getUsuarioById(id: number): Observable<UsuarioModel> {
        return this.http
            .getAll<UsuarioModel>(`${environment.URLSERVIDOR}Usuario/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getUsuarioByEmail(email: string): Observable<UsuarioModel> {
        return this.http
            .getAll<UsuarioModel>(`${environment.URLSERVIDOR}usuario/${email}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getAllUsuarios(): Observable<UsuarioModel> {
        return this.http
            .getAll<UsuarioEntity[]>(`${environment.URLSERVIDOR}Usuario`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.mapper.mapFrom(x)));
    }


    postUsuario(param: UsuarioModel) {
        return this.http
            .post<UsuarioEntity>(`${environment.URLSERVIDOR}Usuario`, this.mapper.mapTo(param))
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }


    putUsuario(param: UsuarioModel) {
        return this.http
            .put<void>(
                `${environment.URLSERVIDOR}Usuario/${param.id}`,
                this.mapper.mapTo(param)
            )
            .pipe(map((x) => x.data));
    }

    deleteUsuario(id: number): Observable<void> {
        return this.http
            .delete<void>(`${environment.URLSERVIDOR}Usuario/${id}`, id)
            .pipe(map((x) => x.data));
    }
}
