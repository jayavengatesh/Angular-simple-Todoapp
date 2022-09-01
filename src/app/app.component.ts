import { Component, OnInit } from '@angular/core';

import { ClientService } from './client.service';
import { Tasks } from './tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit  {
  
  taskObj:Tasks = new Tasks();
  Tasksarr:Tasks[] = [];
  addvalue!:string;
  editTaskValue : string = '';

  
 constructor ( private service:ClientService){}


  ngOnInit(): void {
    this.taskObj = new Tasks()
    this.getTasks()
  }


 getTasks()
 {
  this.service.getTasks().subscribe((res) => {
    this. Tasksarr = res;
  },(err) => {
    alert("error occured")
  }) 
 }

 addTask(value:any){
  this.taskObj.name = value;
  this.service.addTasks(this.taskObj).subscribe((res) => {
    this.getTasks()
  },(err) => {
    alert("error Occured" + err)
  })
this.addvalue = '';
 }



 DeleteTask(value:Tasks){
  this.service.deleteTasks(value).subscribe( (res) => {
    this.getTasks()
  },(err) => {
    alert("failed to delete" + err)
  })
 }
 
 
 editTask(value:any){
  this.editTaskValue = value;
  this.taskObj.name = this.editTaskValue
  this.service.editTasks(this.taskObj).subscribe( (res) => {
    this.getTasks()
  },(err) => {
    alert(" updated!"+err)
  })
 }


 call(etask:Tasks)
{
  this.taskObj = etask;
  this.editTaskValue = etask.name;
}



}
