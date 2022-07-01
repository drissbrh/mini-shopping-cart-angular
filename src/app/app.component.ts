import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sneaker-shop';
  show: boolean = false;

  setShow(): void {
    this.show = !this.show;
  }
}
