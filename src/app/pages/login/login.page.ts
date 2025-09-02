import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { identity } from 'rxjs';
import { StorageProvider } from 'src/app/shared/provide/storage-provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {


  emailControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required]);

  constructor(private storagProvider: StorageProvider, private r:Router) { }

  ngOnInit() {
  }
  onSubmit() {
    const user = {
      email: this.emailControl.value,
      password: this.password.value

    };
    if (!this.password.valid && !this.emailControl.valid) {
      console.log('fill in the text fields')
      return;
    }
    if (!this.emailControl.valid) {
      console.log('wrong email')
      return;
    }

    this.storagProvider.set('user', JSON.stringify(user));
  }
  click() {
    this.r.navigate(['/register'])
  }
}
