import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {
  @Input() 
  imgSrc1:string="/assets/value1.jpeg"
  imgSrc2:string="/assets/value2.jpeg"
  constructor() { }

  ngOnInit(): void {
  }

}
