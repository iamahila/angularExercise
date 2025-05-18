import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent {

  
  hasError= false;
  isSpecial = true;
  messageClasses = {
    'normal': !this.hasError,
    'error': this.hasError,
    'special': this.isSpecial
  }

  styleClasses = {
    color: "blue",
    fontStyle: "italic"
  }

  

}
