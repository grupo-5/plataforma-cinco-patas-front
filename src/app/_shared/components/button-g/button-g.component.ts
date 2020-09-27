import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-g',
  templateUrl: './button-g.component.html',
  styleUrls: ['./button-g.component.css']
})
export class ButtonGComponent implements OnInit {
  @Input() nomeBotao: string;
  constructor() { }

  ngOnInit(): void {
  }

}
