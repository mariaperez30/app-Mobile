import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageProvider } from './provide/storage-provider';
import { SelectComponent } from './components/select/select.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [InputComponent, ButtonComponent,SelectComponent,CardComponent],
  providers: [StorageProvider],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[InputComponent, ButtonComponent, SelectComponent,CardComponent],
})
export class SharedModule { }
