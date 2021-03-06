import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinderTabsComponent } from './core/finder-tabs/finder-tabs.component';
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MainButtonDirective } from './directives/main-button/main-button.directive';
import { FinderPrimaryButtonDirective } from './directives/primary-button/finder-primary-button.directive';
import { SecondaryButtonDirective } from './directives/secondary-button/secondary-button.directive';
import { FinderDropdownDirective } from './directives/finder-dropdown/finder-dropdown.directive';
import { MatInputModule } from "@angular/material/input";
import { FinderSelectorComponent } from './core/finder-selector/finder-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { OverlayModule } from "@angular/cdk/overlay";
import { FinderRadioComponent } from './core/finder-radio/finder-radio.component';
import { MatRadioModule } from "@angular/material/radio";
import { FinderPrimaryDirective } from './core/finder-button/directives/finder-primary.directive';
import { FButtonDirective } from './core/finder-button/directives/f-button.directive';
import { FinderButtonModule } from "./core/finder-button/finder-button.module";
import { FinderCheckboxModule } from "./core/finder-checkbox/finder-checkbox.module";
import { FinderMainButtonModule } from "./core/finder-main-button/finder-main-button.module";
import { FinderInputModule } from "./core/finder-input/finder-input.module";
import { FinderTextAreaModule } from "./core/finder-text-area/finder-text-area.module";
import { FinderValidationMessageModule } from "./core/finder-validation-message/finder-validation-message.module";
import { FinderSelectorModule } from "./core/finder-selector/finder-selector.module";
import { FinderRadioModule } from "./core/finder-radio/finder-radio.module";
import { LolKekComponent } from './core/lol-kek/lol-kek.component';
import { OlegComponent } from './tmp/oleg/oleg.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,

    FinderTabsComponent,
    MainButtonDirective,
    FinderPrimaryButtonDirective,
    SecondaryButtonDirective,
    FinderDropdownDirective,
    FButtonDirective,
    FinderPrimaryDirective,
    LolKekComponent,
    OlegComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FinderButtonModule,
    FinderCheckboxModule,
    FinderMainButtonModule,
    FinderInputModule,
    FinderTextAreaModule,
    FinderValidationMessageModule,
    FinderSelectorModule,
    FinderRadioModule,

    MatRadioModule,
    // BrowserAnimationsModule,
    // MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
