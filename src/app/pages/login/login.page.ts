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
   const usuario: any = this.storagProvider.get("user")
    if (usuario.password==this.password.value && usuario.email==this.emailControl.value) {
      this.r.navigate(['/home'])}
  }
  click() {
    this.r.navigate(['/register'])
  }

    
}
