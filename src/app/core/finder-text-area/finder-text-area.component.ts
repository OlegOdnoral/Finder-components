import { ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-finder-text-area',
  templateUrl: './finder-text-area.component.html',
  styleUrls: ['./finder-text-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FinderTextAreaComponent),
    multi: true
  }]
})
export class FinderTextAreaComponent implements ControlValueAccessor, OnInit, OnDestroy {

  @Input() formControl = new FormControl();
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() maxLength!: number;

  public currentLength = 0


  private destroyed: Subject<any> = new Subject<any>()
  private value!: string;
  private onChange = (value: any) => {};
  private onTouched = () => {};

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(takeUntil(this.destroyed))
      .subscribe((value: string) => this.currentLength = value.trim().length);
  }

  ngOnDestroy() {
    this.destroyed.next(null);
    this.destroyed.complete();
  }

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
