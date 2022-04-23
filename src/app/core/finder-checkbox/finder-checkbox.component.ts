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
import { MatCheckboxChange } from "@angular/material/checkbox";

@Component({
  selector: 'app-finder-checkbox',
  templateUrl: './finder-checkbox.component.html',
  styleUrls: ['./finder-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FinderCheckboxComponent),
    multi: true
  }]
})
export class FinderCheckboxComponent implements ControlValueAccessor {

  @Input('aria-describedby') ariaDescribedby!: string
  @Input('aria-label') ariaLabel!: string
  @Input('aria-labelledby') ariaLabelledby!: string | null

  @Input() checked!: boolean
  @Input() disableRipple!: boolean
  @Input() disabled!: boolean
  @Input() indeterminate!: boolean
  @Input() labelPosition!: 'before' | 'after'
  @Input() name!: string | null
  @Input() required!: boolean
  @Input() value!: string

  @Output() change!: EventEmitter<MatCheckboxChange>
  @Output() indeterminateChange!: EventEmitter<boolean>

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
