import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../task.service';
import {Task} from '../task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task: Task;

  constructor(
    private activatedRoute: ActivatedRoute,
    public taskService: TaskService) {
  }

  ngOnInit(): void {
    this.getTask();
  }

  private getTask(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('taskId');
    this.taskService.getTaskById(id).subscribe(t => this.task = t);
  }
}
