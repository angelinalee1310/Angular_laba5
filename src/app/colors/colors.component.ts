import { Component, OnInit } from '@angular/core';
import { Color } from '../color';
import { COLORS } from '../mock-colors';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  colors = COLORS;
  selectedColor: Color;
  constructor() { }
  ngOnInit(): void {
  }

  onSelect(color: Color): void {
    this.selectedColor = color;
  }
}
