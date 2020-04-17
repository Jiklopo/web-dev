import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from './_interfaces/Company';
import {Vacancy} from './_interfaces/Vacancy';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  link = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.link + 'companies/');
  }

  getCompanyVacancies(companyId: string): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.link + 'companies/' + companyId + '/vacancies/');
  }
}
