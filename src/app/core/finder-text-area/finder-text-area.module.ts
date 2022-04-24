import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { FinderTextAreaComponent } from "./finder-text-area.component";

@NgModule({
  declarations: [ FinderTextAreaComponent ],
  imports: [ BrowserModule, ReactiveFormsModule ],
  exports: [ FinderTextAreaComponent ]
})
export class FinderTextAreaModule {}
