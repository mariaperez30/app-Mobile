import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: false
})
export class ButtonComponent  implements OnInit {

  @Input () esperoTexto: string = ''; 
  @Input () shape : 'outline' = 'outline' ;
  @Input () color : 'dark' = 'dark';

  constructor() { }

  ngOnInit() {}

}
