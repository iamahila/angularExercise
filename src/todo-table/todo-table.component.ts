import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit{

  
  hasError= false;
  isSpecial = true;
  greeting = "";
  name: string = "Ahila Karthick";
  displayName = false;
  color = 'yellow';
  colors: string[] = ['red', 'blue', 'green'];
  date = new Date();
  @Input() parentData: string; 
  @Output() childEvent = new EventEmitter<string>();
  messageClasses = {
    'normal': !this.hasError,
    'error': this.hasError,
    'special': this.isSpecial
  }

  styleClasses = {
    color: "blue",
    fontStyle: "italic"
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onClick(){
    this.greeting = 'Hello';
    this.childEvent.emit('New event emitted');
  }

  logMessage(value: string){
    console.log(value);
  }
  

}
