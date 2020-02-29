import {Component, OnInit} from '@angular/core';
import {Job} from '../job';
import {JobService} from '../job.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  jobs: Job[];

  constructor(private jobService: JobService) {
  }

  public getJobs(): void {
    this.jobService.getJobs().subscribe(j => this.jobs = j);
  }

  ngOnInit(): void {
    this.getJobs();
  }

}
