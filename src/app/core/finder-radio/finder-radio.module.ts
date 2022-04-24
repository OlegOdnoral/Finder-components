import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatRadioModule } from "@angular/material/radio";
import { FinderRadioComponent } from "./finder-radio.component";

@NgModule({
  declarations: [ FinderRadioComponent ],
  imports: [ BrowserModule, MatRadioModule ],
  exports: [ FinderRadioComponent ]
})
export class FinderRadioModule {}
