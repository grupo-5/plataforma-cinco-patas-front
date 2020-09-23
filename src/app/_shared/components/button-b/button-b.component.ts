import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-b',
  templateUrl: './button-b.component.html',
  styleUrls: ['./button-b.component.css']
})
export class ButtonBComponent implements OnInit {
  @Input() nomeBotao: string;
  constructor() { }

  ngOnInit(): void {
  }

}
