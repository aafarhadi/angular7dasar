import { Component, OnInit } from '@angular/core';
import { DasarService } from '../dasar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isi_keranjang: number;

  constructor(private dasarService: DasarService) { }

  ngOnInit() {
    this.dasarService.isi_keranjang_sekarang.subscribe(msg => this.isi_keranjang = msg);
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
