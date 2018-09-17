import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BsDropdownModule, CollapseModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
