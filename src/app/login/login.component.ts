import { Component, OnInit } from '@angular/core';
import { DasarService } from '../dasar.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data_member: Observable<any> = null;
  udah_submit: boolean = false;
  ada_respon: boolean = false;
  respon_benar: boolean = false;
  response_message: string = '';

  constructor(private dasarService: DasarService) { }
 

  ngOnInit() {
    this.udah_submit = false;
    this.ada_respon = false;
    this.respon_benar = false;
    this.dasarService.ganti_isi_keranjang(3);
  }

  onSubmit(f){
    this.udah_submit = true;
    let email = f.value.email;
    let password = f.value.password;

    let dataform = {"email": email, "password": password};

    //console.log(dataform);
    
    this.dasarService.hit_api_post('log_me_in', dataform).subscribe(
      (respon) => {
        this.ada_respon = true;
        this.response_message = respon['message'];

        if(respon['response_code'] == 200)
        {
          this.respon_benar = true;
          this.data_member = respon['data'][0];
        }
        else
        {
          this.respon_benar = false;
        }
        //console.log('response_code: ' + respon['response_code']);
        //console.log('message: ' + respon['message']);
        console.log(respon);
        //console.log(respon['data'][0].email)
      },
      (error) => console.log(error)
    );
    

  }

}
