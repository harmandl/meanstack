import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/models/list';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  lists: List[] = [];
  tasks: Task[] = [];
  listId: string | undefined;
  constructor(private taskService: TaskService, private route: ActivatedRoute,
  private router: Router) { 
  }

  ngOnInit(): void {
     this.taskService.getlists()
       .subscribe((lists) => this.lists = lists);
    
    this.route.params.subscribe((params: Params) => {
      this.listId = params['listId'];
      if (!this.listId)
        return;
      this.taskService.getTasks(this.listId).subscribe((tasks:any ) => this.tasks = tasks);
    })
  }

  onTaskClick(task: Task) {
    this.taskService.setCompleted(task).subscribe(() => task.completed = !task.completed);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe((task:any)=> this.tasks =this.tasks.filter(t=> t._id !=task._id));
  }

  deleteList(list: List) {
  
    this.taskService.deleteList(list).subscribe(()=> this.lists =this.lists.filter(l=> l._id !=list._id));
  }

  addTaskClick() {
    if (!this.listId){
      alert('Please select a list to add new task.')
    return
  }
     this.router.navigate(['./new-task'], {relativeTo: this.route})
    
  }

}
