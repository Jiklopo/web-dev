import {Component, OnInit} from '@angular/core';
import {Task} from '../task';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(
    public taskService: TaskService
  ) {
  }

  ngOnInit(): void {
    this.retrieveTasks();
  }

  private retrieveTasks() {
    this.taskService.getTasks().subscribe(t => this.tasks = t);
  }

}
