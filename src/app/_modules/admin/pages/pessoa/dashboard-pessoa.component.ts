import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-pessoa',
  templateUrl: './dashboard-pessoa.component.html',
  styleUrls: ['./dashboard-pessoa.component.css']
})
export class DashboardPessoaComponent implements OnInit {

  caminho = "./../../../../../assets/images/dog-2.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
