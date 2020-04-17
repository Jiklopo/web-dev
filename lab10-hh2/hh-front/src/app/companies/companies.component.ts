import {Component, OnInit} from '@angular/core';
import {Company} from '../_interfaces/Company';
import {DataService} from '../data.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getCompanies().subscribe(c => this.companies = c);
  }
}
