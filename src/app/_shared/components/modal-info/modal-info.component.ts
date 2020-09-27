import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit {
  @Input() urlModal: string; 
  constructor() { }

  ngOnInit(): void {
  }

}
