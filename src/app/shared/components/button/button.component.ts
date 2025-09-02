import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: false
})
export class ButtonComponent  implements OnInit {

  @Input () esperoTexto: string = ''; 
  @Input () shape : 'round' | '' = '' ;
  @Input () type : 'submit'  | 'button' = 'button';
 

  constructor() { }

  ngOnInit() {}

}
