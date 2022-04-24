import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FinderCheckboxComponent } from "./finder-checkbox.component";

@NgModule({
  declarations: [FinderCheckboxComponent],
  imports: [
    BrowserModule,
    MatCheckboxModule
  ],
  exports: [FinderCheckboxComponent]
})
export class FinderCheckboxModule {}
