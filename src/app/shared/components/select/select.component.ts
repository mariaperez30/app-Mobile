import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: false
})
export class SelectComponent  implements OnInit {
@Input() label : string = "";
@Input() list: any | null = null;
@Input() placeholder : string ="";
@Input() controlador : FormControl= new FormControl("");


  constructor() { }

  ngOnInit() {}

}
