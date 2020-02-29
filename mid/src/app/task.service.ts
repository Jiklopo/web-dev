import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Task} from './task';
import {TASKS} from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {
  }

  public getTasks(): Observable<Task[]> {
    return of(TASKS);
  }

  public getTaskById(id: number): Observable<Task> {
    return of(TASKS.find(t => t.id === id));
  }

  public getStatus(task: Task): string {
    if (task.status === -1) {
      return 'New';
    }
    if (task.status === 0) {
      return 'In Progress';
    }
    return 'Done';
  }

  public getStatusColor(task: Task): string {
    if (task.status < 0) {
      return 'color: red;';
    }
    if (task.status === 0) {
      return 'color: #FF7904';
    }
    return 'color: green;';
  }
}
