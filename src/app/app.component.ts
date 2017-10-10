import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  aaa: number;

  constructor(
  ) {
    this.aaa = 5;
  }

  avanza() {
    this.aaa = this.aaa + 5;
    //for (var _i = 0; _i < 20; _i++) {
      //this.aaa = this.aaa + 1;
    //}
  }

}
