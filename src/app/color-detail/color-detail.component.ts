import { Component, OnInit, Input } from '@angular/core';
import { Color } from '../color';
@Component({
  selector: 'app-color-detail',
  templateUrl: './color-detail.component.html',
  styleUrls: ['./color-detail.component.css']
})
export class ColorDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() color: Color;
}
