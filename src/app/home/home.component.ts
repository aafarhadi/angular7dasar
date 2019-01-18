import { Component, OnInit } from '@angular/core';
import { DasarService } from '../dasar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dasarService: DasarService) { }

  ngOnInit() {
    this.ganti_keranjang();
  }

  ganti_keranjang(){
    this.dasarService.ganti_isi_keranjang(1);
  }

}
