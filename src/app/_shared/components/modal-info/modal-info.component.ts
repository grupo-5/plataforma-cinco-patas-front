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

  @ViewChild('openModal') openModal: ElementRef;

  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  open(item) {
    this.item = item;

    this.openModal.nativeElement.click();
  }


}
