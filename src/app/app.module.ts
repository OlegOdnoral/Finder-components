import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinderButtonComponent } from './core/finder-button/finder-button.component';
import { FinderMainButtonComponent } from './core/finder-main-button/finder-main-button.component';
import { FinderTabsComponent } from './core/finder-tabs/finder-tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MainButtonDirective } from './directives/main-button/main-button.directive';
import { FinderPrimaryButtonDirective } from './directives/primary-button/finder-primary-button.directive';
import { SecondaryButtonDirective } from './directives/secondary-button/secondary-button.directive';
import { FinderDropdownDirective } from './directives/finder-dropdown/finder-dropdown.directive';
import { MatInputModule } from "@angular/material/input";
import { FinderSelectorComponent } from './core/finder-selector/finder-selector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { OverlayModule } from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent,
    FinderButtonComponent,
    FinderMainButtonComponent,
    FinderTabsComponent,
    MainButtonDirective,
    FinderPrimaryButtonDirective,
    SecondaryButtonDirective,
    FinderDropdownDirective,
    FinderSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    ScrollingModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
