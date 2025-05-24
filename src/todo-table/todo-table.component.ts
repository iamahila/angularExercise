import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';

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
  employeeList:Employee[];
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

  constructor(private employeeService: EmployeeService){

  }

  onClick(){
    this.greeting = 'Hello';
    this.childEvent.emit('New event emitted');
    this.employeeList = this.employeeService.getEmployees();
  }

  logMessage(value: string){
    console.log(value);
  }

  passEvent(event: any){
    console.log("Value is: " + event.target.value);
  }

  getInputData(event: Event){
    console.log((event.target as HTMLInputElement).value);
  }
  

}
