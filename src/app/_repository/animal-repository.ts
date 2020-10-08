import { AnimalMapper } from './../_mapper/animal-mapper';
import { EstadoMapper } from './../_mapper/estado-mapper';
import { CidadeMapper } from './../_mapper/cidade-mapper';
import { BaseHttpService } from './../_services/http/base-http.service';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class AnimalRepository {

    mapper = new AnimalMapper();
    mapperEstado = new EstadoMapper();
    mapperCidade = new CidadeMapper();

    constructor(public http: BaseHttpService) { }



}