import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone :false
})
export class CardComponent  implements OnInit {
@Input() title: string="";
 @Input() autor: string= "";
 @Input() description: string= "";
 @Input() srci : string= "";
 
  constructor() { }

  ngOnInit() {}

}
