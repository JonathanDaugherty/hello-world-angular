import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-angular from Jonathan(future programmer)';
  name: string = "Jonathan Daugherty";
  myText: string = "Default myText String"

  changeName(): void {
    this.name = "Michael Jordan";
  }
}
