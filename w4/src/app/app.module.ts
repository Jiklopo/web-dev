import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {SuperHeaderComponent} from './super-header/super-header.component';
import {HttpClientModule} from '@angular/common/http';
import {ShareButtonsModule} from '@ngx-share/buttons';
import {FormsModule} from '@angular/forms';
import {CategoriesComponent} from './categories/categories.component';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
  {path: 'categories', component: CategoriesComponent},
  {path: '', redirectTo: '/categories', pathMatch: 'full'},
  {path: 'categories/:categoryId/products', component: ProductListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SuperHeaderComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ShareButtonsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
