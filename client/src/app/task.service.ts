import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './models/list';
import { Task } from './models/task';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webservice: WebService) { }
  
  getlists(): Observable<any>{
  
    const res = this.webservice.get('lists');
    return res;
  }

  createList(title:string) {
    return this.webservice.post('' , {title:title})
  }

  deleteList(list: List)
  {
    return this.webservice.delete(`lists/${list._id}`)
  }

  getTasks(listId: string):Observable<any>{
    const res = this.webservice.get(`lists/${listId}/tasks`);
    return res;
  }
  createTask(listId:string, title:string) {
    return this.webservice.post(`lists/${listId}/task` , {title:title})
  }
  setCompleted(task: Task) {
    return this.webservice.patch(`lists/${task._listId}/task/${task._id}`, {completed:!task.completed})
  }
  deleteTask(task: Task)
  {
    return this.webservice.delete(`lists/${task._listId}/task/${task._id}`)
  }
}
