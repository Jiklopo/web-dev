import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskDetailsComponent} from './task-details/task-details.component';
import {Route, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

const ROUTES: Route[] = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: 'tasks', component: TaskListComponent},
  {path: 'tasks/:taskId', component: TaskDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
