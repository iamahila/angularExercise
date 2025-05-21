import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise';
  name='Ahila Karthick Nila';
  message: string;

  checkEvent(message: string){
    this.message = message;
  }
}
