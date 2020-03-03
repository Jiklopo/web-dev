import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JobService} from '../job.service';
import {Job} from '../job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  job: Job;

  constructor(
    private activatedRoute: ActivatedRoute,
    private jobService: JobService
  ) {
  }

  public getJobs(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.jobService.getJobById(id).subscribe(j => this.job = j);
  }

  public like(): void {
    this.job.like_count++;
  }

  ngOnInit(): void {
    this.getJobs();
  }
}
