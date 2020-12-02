import { ConfimacaoSolicitacaoComponent } from './../../../_modules/admin/pages/pessoa/confimacao-solicitacao/confimacao-solicitacao.component';
import { DashboardPessoaComponent } from './../../../_modules/admin/pages/pessoa/dashboard-pessoa.component';
import { Router } from '@angular/router';
import { AuthService } from './../../../_modules/home/pages/seguranca/auth.service';
import { AnimalModel } from './../../../_core/model/animal-model';
import { ModalService } from './../../../_services/modal.service';
import { Observable } from 'rxjs';
import { Input, Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css'],
})
export class ModalInfoComponent implements OnInit {
  @Input() urlModal: string;
  item: any = {};
  idade: any;

  @ViewChild('openModal') openModal: ElementRef;

  constructor(private modalService: ModalService, public auth: AuthService, public router: Router, public confirmarSolicitacao: ConfimacaoSolicitacaoComponent) { }

  ngOnInit() { }

  ngAfterViewInit() { }

  open(item) {
    this.item = item;
    localStorage.setItem('idAnimal', this.item.id);
    this.openModal.nativeElement.click();

    console.log(this.item.dataNasc)
    this.idade = this.calcIdade(this.item.dataNasc);
  }

  calcIdade(dataString) {
    var data = +new Date(dataString);
    return ~~((Date.now() - data) / (31557600000));
  }

  verificaLogin(tipoSolicitacao) {
    let res = this.auth.isAccessTokenInvalido();
    localStorage.setItem('tipoSolicitacao', tipoSolicitacao);
    if (res) {
      console.log("deslogado")
      this.router.navigate(['login']);
    } else {
      console.log("logado")
      this.router.navigate(['confirmar-solicitacao']);
    }
  }

}
