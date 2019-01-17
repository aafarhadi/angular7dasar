import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DasarService } from '../dasar.service';

@Component({
  selector: 'app-detailproduk',
  templateUrl: './detailproduk.component.html',
  styleUrls: ['./detailproduk.component.css']
})
export class DetailprodukComponent implements OnInit {

  produk_detail : Observable<any> = null;
  respon_benar: boolean = false;
  ada_respon: boolean = false;
  response_message: string = '';

  constructor(private route: ActivatedRoute, private dasarService: DasarService) { }

  ngOnInit() {
    let permalink = this.route.snapshot.paramMap.get('permalink');
    this.get_detail_produk(permalink);
    this.respon_benar = false;
    this.ada_respon = false;
  }

  get_detail_produk(permalink){
    this.dasarService.hit_api_get('get_detail_produk?nama='+permalink).subscribe(
      (respon) =>{
        this.ada_respon = true;
        this.response_message = respon['message'];
        if(respon['response_code'] == 200)
          {
            this.respon_benar = true;
            this.produk_detail = respon['data'][0];
          }
          else
          {
            this.respon_benar = false;
          }
        
      },
      (error) => console.log(error)
    );
  }

}
