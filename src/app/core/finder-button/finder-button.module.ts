import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FinderButtonComponent } from "./finder-button.component";

@NgModule({
  declarations: [ FinderButtonComponent ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [ FinderButtonComponent ]
})
export class FinderButtonModule {}
