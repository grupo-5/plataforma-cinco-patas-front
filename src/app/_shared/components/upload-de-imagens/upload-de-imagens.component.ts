import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-de-imagens',
  templateUrl: './upload-de-imagens.component.html',
  styleUrls: ['./upload-de-imagens.component.css'],
})
export class UploadDeImagensComponent implements OnInit {

  


  public imagePath;
  imgURL: any;
  public message: string;
  constructor() {}

  ngOnInit(): void {}
  // testar qual metoto funciona melhor

  onChange(event) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];

      const formData = new FormData();
      formData.append('foto', foto);
      console.log(foto);
    }
  }

 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  
}
}
