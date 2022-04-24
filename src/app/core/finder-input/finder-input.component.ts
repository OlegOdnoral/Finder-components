import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";

export enum InputType {
  button = "button",
  checkbox = "checkbox",
  color = "color",
  date = "date",
  datetimelocal = "datetime-local",
  email = "email",
  file = "file",
  hidden = "hidden",
  image = "image",
  month = "month",
  number = "number",
  password = "password",
  radio = "radio",
  range = "range",
  reset = "reset",
  search = "search",
  submit = "submit",
  tel = "tel",
  text = "text",
  time = "time",
  url = "url",
  week = "week"
};

@Component({
  selector: 'app-finder-input',
  templateUrl: './finder-input.component.html',
  styleUrls: [ './finder-input.component.scss' ],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FinderInputComponent),
    multi: true
  } ]
})
export class FinderInputComponent implements ControlValueAccessor {

  @Input() formControl = new FormControl();
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email"
    | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range"
    | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week" = "text";

  private value!: string;
  private onChange = (value: any) => {};
  private onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
  }
}
