import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { FinderInputComponent } from "./finder-input.component";

@NgModule({
  declarations: [ FinderInputComponent ],
  imports: [ BrowserModule, ReactiveFormsModule ],
  exports: [ FinderInputComponent ]
})
export class FinderInputModule {}
