import { Component, forwardRef, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl, Validator, AbstractControl, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'app-lol-kek',
  templateUrl: './lol-kek.component.html',
  styleUrls: [ './lol-kek.component.scss' ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => LolKekComponent)
    }
  ]
})
export class LolKekComponent implements ControlValueAccessor {

  quantity = '';

  @Input() increment!: number;

  onChange = (quantity: any) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  writeValue($event: HTMLInputElement) {
    if ($event?.value) {
      this.markAsTouched();
      this.quantity = $event.value;
      this.onChange(this.quantity);
    }
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
