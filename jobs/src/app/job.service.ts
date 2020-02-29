import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Job} from './job';
import {JOBS} from './jobs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() {
  }

  public getJobs(): Observable<Job[]> {
    return of(JOBS);
  }

  public getJobById(id: number): Observable<Job> {
    return of(JOBS.find(j => j.id === id));
  }
}
