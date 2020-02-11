import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {RouterModule} from '@angular/router';
import { SuperHeaderComponent } from './super-header/super-header.component';
import {ShareButtonModule} from '@ngx-share/button';
import {HttpClientModule} from '@angular/common/http';
import {ShareButtonsModule} from '@ngx-share/buttons';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SuperHeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: 'products', component: ProductListComponent}]),
    HttpClientModule,
    ShareButtonModule,
    ShareButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
