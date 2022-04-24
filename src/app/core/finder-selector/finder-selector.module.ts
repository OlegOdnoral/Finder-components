import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { OverlayModule } from "@angular/cdk/overlay";
import { FinderSelectorComponent } from "./finder-selector.component";

@NgModule({
  declarations: [ FinderSelectorComponent ],
  imports: [ BrowserModule, ReactiveFormsModule, OverlayModule ],
  exports: [ FinderSelectorComponent ]
})
export class FinderSelectorModule {}
