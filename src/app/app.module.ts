import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinderButtonComponent } from './core/finder-button/finder-button.component';
import { FinderMainButtonComponent } from './core/finder-main-button/finder-main-button.component';
import { FinderTabsComponent } from './core/finder-tabs/finder-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    FinderButtonComponent,
    FinderMainButtonComponent,
    FinderTabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
