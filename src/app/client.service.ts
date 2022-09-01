import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor( private http:HttpClient) { }
   
  getTasks():Observable<Tasks[]>{

    return this.http.get<Tasks[]>("http://localhost:3000/posts")

  }

  addTasks(tasks:Tasks):Observable<Tasks>{
    return this.http.post<Tasks>("http://localhost:3000/posts",tasks)
}


deleteTasks(tasks:Tasks):Observable<Tasks>{
  return this.http.delete<Tasks>("http://localhost:3000/posts"+ '/'+ tasks.id)
}


editTasks(tasks:Tasks):Observable<Tasks>{
  return this.http.put<Tasks>("http://localhost:3000/posts"+'/'+tasks.id,tasks)
}




}
