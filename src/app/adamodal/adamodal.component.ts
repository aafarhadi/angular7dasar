import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adamodal',
  templateUrl: './adamodal.component.html',
  styleUrls: ['./adamodal.component.css']
})

export class AdamodalComponent implements OnInit {

  id_dipilih : number = 0;

  constructor( private modalService: NgbModal ) { }

  ngOnInit() {
  }

  buka_modalnya(content, idnya){
    this.id_dipilih = idnya;
    this.modalService.open(content);
  }

  hapus_data(idnya){
    console.log('menghapus id: '+idnya);
    this.modalService.dismissAll('close');
  }


}
