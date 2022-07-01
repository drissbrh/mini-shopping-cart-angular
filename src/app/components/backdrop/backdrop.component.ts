import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css'],
})
export class BackdropComponent implements OnInit {
  @Input() showBackdrop: boolean;
  @Output() showIt: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  clickIt() {
    this.showIt.emit();
  }
}
