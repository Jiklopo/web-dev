import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {RouterModule} from '@angular/router';
import { SuperHeaderComponent } from './super-header/super-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SuperHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: 'products', component: ProductListComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
