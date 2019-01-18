import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DasarService{
    private isi_keranjang_master = new BehaviorSubject(0);
    isi_keranjang_sekarang = this.isi_keranjang_master.asObservable();
    
    public api_url = "http://localhost/otentik/api/otq/";
    //private api_url = "https://otentiq.id/api/otq/";
    
    constructor(private http: HttpClient){}

    public hit_api_get(nama_fungsi): Observable<any>{
        return this.http.get(this.api_url+nama_fungsi);
    }

    public hit_api_post(nama_fungsi, data): Observable<any>{
        return this.http.post(this.api_url+nama_fungsi, {data: data})
        .pipe(map((res) => {
            //console.log(res);
            return res;
          }),
          catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error);
    
        // return an observable with a user friendly message
        return throwError('Error! something went wrong.');
      }
    
      ganti_isi_keranjang(angka: number){
        this.isi_keranjang_master.next(angka);
      }





}