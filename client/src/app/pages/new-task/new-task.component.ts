import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { connect } from 'rxjs';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  listId: string ='';
  constructor(private taskservice:TaskService,private route:ActivatedRoute, private router:Router) {
    
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.listId = params['listId'];
    })
  }

  addTask(taskTitle: string)
  {
    this.taskservice.createTask(this.listId, taskTitle).subscribe(()=>this.router.navigate([`/lists/${this.listId}`],{relativeTo:this.route}))
  }
}
