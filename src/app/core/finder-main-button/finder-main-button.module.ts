import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { FinderMainButtonComponent } from "./finder-main-button.component";

@NgModule({
  declarations: [ FinderMainButtonComponent ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  exports: [ FinderMainButtonComponent ]
})
export class FinderMainButtonModule {}
