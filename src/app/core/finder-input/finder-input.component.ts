import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  forwardRef,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-finder-input',
  templateUrl: './finder-input.component.html',
  styleUrls: [ './finder-input.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FinderInputComponent),
    multi: true
  } ]
})
export class FinderInputComponent implements ControlValueAccessor, DoCheck {

  @Input() public  disabled: boolean = false;
  @Input() public  placeholder: string = '';
  @Input() public  type: "date" | "datetime-local" | "email" | "month" | "number" | "password" | "radio" | "range"
    | "reset" | "search" | "tel" | "text" | "time" | "url" | "week" = "text";

  public touched: boolean = false;
  public value: string = '';
  public isValid: boolean = true;
  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor(private elRef:ElementRef, private cdr: ChangeDetectorRef) {
  }

  ngDoCheck() {
    const htmlElement: HTMLElement = this.elRef.nativeElement;
    this.isValid = !htmlElement.classList.contains('ng-invalid');
    this.cdr.markForCheck();
  }

  public registerOnChange(fn: () => {}): void {
    this.onChange = fn;
  }

  public  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public  writeValue(value: any): void {
    if (value) {
      this.value = value;
      this.onChange(this.value);
      this.markAsTouched();
    }
  }

  public markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
