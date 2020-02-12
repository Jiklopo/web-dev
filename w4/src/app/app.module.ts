import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {RouterModule} from '@angular/router';
import {SuperHeaderComponent} from './super-header/super-header.component';
import {HttpClientModule} from '@angular/common/http';
import {ShareButtonsModule} from '@ngx-share/buttons';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SuperHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{path: 'products', component: ProductListComponent}]),
    HttpClientModule,
    ShareButtonsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
