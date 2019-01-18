import { Component, OnInit } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { DasarService } from '../dasar.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  URL: string = "";

  public uploader: FileUploader;
  url_gambar: string;
  respon_benar: boolean = false;

  constructor(private dasarService: DasarService) {
    this.URL = dasarService.api_url +'handle_upload';
    this.uploader = new FileUploader({url: this.URL});
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         //alert('File uploaded successfully');
     };
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    
     this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
   
  }

onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    let data = JSON.parse(response); //success server response
    if(data['response_code'] == 200)
    {
      this.respon_benar = true;
      this.url_gambar = data['data'][0].nama_file_terupload;
    }
    else
    {
      this.respon_benar = false;
    }
    
    console.log(data);
}

onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    let error = JSON.parse(response); //error server response
}

  upload_sekarang(){
    
    this.uploader.uploadAll();
    console.log(this.URL);
  }

}
