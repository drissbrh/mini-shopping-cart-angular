import { Component, Input, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/common/sneaker';

@Component({
  selector: 'app-sneakeritem',
  templateUrl: './sneakeritem.component.html',
  styleUrls: ['./sneakeritem.component.css'],
})
export class SneakeritemComponent implements OnInit {
  @Input() item: Sneaker;
  constructor() {}

  ngOnInit(): void {}
}
