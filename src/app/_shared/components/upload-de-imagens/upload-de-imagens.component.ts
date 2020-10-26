import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-de-imagens',
  templateUrl: './upload-de-imagens.component.html',
  styleUrls: ['./upload-de-imagens.component.css'],
})
export class UploadDeImagensComponent implements OnInit {

  @Output() image = new EventEmitter();

  public imagePath;
  imgURL: any;
  public message: string;
  constructor() {}

  ngOnInit(): void {}

  onChange(event) {
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];
      var reader = new FileReader();
      this.imagePath = event.target.files;
      reader.readAsDataURL(foto);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };

      const formData = new FormData();
      formData.append('imagem', foto);
      this.sendImage(formData);
    } else {
      return;
    }
  }

  sendImage(image) {

    this.image.emit(image);
  }

}
