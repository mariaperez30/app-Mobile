import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageProvider } from 'src/app/shared/provide/storage-provider';
import { API } from 'src/app/shared/service/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {

 data: any | null = null;
  NameControl : FormControl = new FormControl('', Validators.required);
  lastnameControl: FormControl = new FormControl('', Validators.required);
  emailControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required]);
  

  
 controlador : FormControl= new FormControl("");
  constructor(private storagProvider: StorageProvider, private r:Router, private api:API) { }

  ngOnInit() {
    this.country()
  }
  onSubmit() {
    const user = {
      name: this.NameControl.value,
      Lastname: this.lastnameControl.value,
      email: this.emailControl.value,
      password: this.password.value,
      pais: this.controlador.value,
      
    };
    if (!this.password.valid && !this.emailControl.valid && !this.NameControl.valid && this.lastnameControl.valid) {
      console.log('fill in the text fields')
      return;
    }
   if (!this.emailControl.valid) {
      console.log('wrong email')
      return;
    }
    this.r.navigate(['/register'])
    this.storagProvider.set('user', JSON.stringify(user));
  }
  click() {
  this.r.navigate(['/login'])
  }

  async country(){
    this.data= await this.api.get<any>('https://countriesnow.space/api/v0.1/countries/flag/unicode')
    console.log(this.data)
  
      
  }

}
