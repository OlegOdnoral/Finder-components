import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FinderInputComponent } from "./finder-input.component";

@NgModule({
  declarations: [ FinderInputComponent ],
  imports: [ BrowserModule, ReactiveFormsModule, FormsModule ],
  exports: [ FinderInputComponent ]
})
export class FinderInputModule {}
