import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageProvider } from 'src/app/shared/provide/storage-provider';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {


  NameControl : FormControl = new FormControl('', Validators.required);
  lastnameControl: FormControl = new FormControl('', Validators.required);
  emailControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required]);

  constructor(private storagProvider: StorageProvider, private r:Router) { }

  ngOnInit() {
  }
  onSubmit() {
    const user = {
      name: this.NameControl.value,
      Lastname: this.lastnameControl.value,
      email: this.emailControl.value,
      password: this.password.value
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

}
