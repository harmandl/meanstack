import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  constructor(private taskService: TaskService,private route: ActivatedRoute,private router: Router){}
  ngOnInit(): void {
    
  }
  addList(title: string)
  {
    this.taskService.createList(title).subscribe(()=>  this.router.navigate(['/lists'],{relativeTo:this.route}));
  }
}
