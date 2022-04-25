import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  forwardRef,
  Input
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-finder-text-area',
  templateUrl: './finder-text-area.component.html',
  styleUrls: [ './finder-text-area.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FinderTextAreaComponent),
    multi: true
  } ]
})
export class FinderTextAreaComponent implements ControlValueAccessor, DoCheck {

  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() maxLength!: number;

  public currentLength = 0
  public touched: boolean = false;
  public isValid: boolean = true;

  private value: string = '';
  private onChange = (value: any) => {};
  private onTouched = () => {};
  private readonly formInvalidClass = 'ng-invalid';

  constructor(private readonly elRef: ElementRef, private readonly cdr: ChangeDetectorRef) {
  }

  public ngDoCheck() {
    const htmlElement: HTMLElement = this.elRef.nativeElement;
    this.isValid = !htmlElement.classList.contains(this.formInvalidClass);
    this.cdr.markForCheck();
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public writeValue(value: string|undefined): void {
    if (value) {
      this.value = value;
      this.onChange(this.value);
      this.markAsTouched();
    }
  }

  public markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

}
