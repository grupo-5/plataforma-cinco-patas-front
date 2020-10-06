import { Input, Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-b',
  templateUrl: './button-b.component.html',
  styleUrls: ['./button-b.component.css']
})
export class ButtonBComponent implements OnInit {
  @Input() nomeBotao: string;
  @Input() disabled: boolean;
  
  @Output() onClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}


  buttonClicked(event) {
    this.onClick.emit(event)
  }
}
