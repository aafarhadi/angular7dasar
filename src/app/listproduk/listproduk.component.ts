import { Component, OnInit } from '@angular/core';
import { DasarService } from '../dasar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listproduk',
  templateUrl: './listproduk.component.html',
  styleUrls: ['./listproduk.component.css']
})
export class ListprodukComponent implements OnInit {
  produks : Observable<any> = null;

  constructor( private dasarService: DasarService) { }

  ngOnInit() {
    this.get_produk_terbaru();
  }

  get_produk_terbaru(){
    this.dasarService.hit_api_get('get_produk_terbaru').subscribe(
      (respon) => {
        this.produks = respon['data'];
      },
      (error) => console.log(error)
    );
  }

}
