import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {JobsListComponent} from './jobs-list/jobs-list.component';
import {JobDetailsComponent} from './job-details/job-details.component';
import {Route, RouterModule} from '@angular/router';

const R: Route[] = [
  {path: 'jobs', component: JobsListComponent},
  {path: '', redirectTo: '/jobs', pathMatch: 'full'},
  {path: 'jobs/:id', component: JobDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    JobsListComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(R)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
