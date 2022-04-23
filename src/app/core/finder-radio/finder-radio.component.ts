import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { MatRadioChange } from "@angular/material/radio";

@Component({
  selector: 'app-finder-radio',
  templateUrl: './finder-radio.component.html',
  styleUrls: ['./finder-radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FinderRadioComponent),
    multi: true
  }]
})
export class FinderRadioComponent implements ControlValueAccessor {

  @Input('aria-describedby') ariaDescribedby!: string
  @Input('aria-label') ariaLabel!: string
  @Input('aria-labelledby') ariaLabelledby!: string
  @Input() checked!: boolean
  @Input() disableRipple!: boolean
  @Input() disabled!: boolean
  @Input() labelPosition!: 'before' | 'after'
  @Input() name!: string
  @Input() required!: boolean

  @Input() value!: string

  @Output() change!: EventEmitter<MatRadioChange>

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
