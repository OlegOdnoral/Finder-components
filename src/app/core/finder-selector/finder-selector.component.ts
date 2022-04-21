import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter, forwardRef, HostBinding, HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef, ViewChild,
  ViewContainerRef
} from '@angular/core';
import { debounceTime, merge, Observable, Subject, Subscription, takeUntil } from "rxjs";
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { TemplatePortal } from "@angular/cdk/portal";

@Component({
  selector: 'finder-selector',
  templateUrl: './finder-selector.component.html',
  styleUrls: [ './finder-selector.component.scss' ],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FinderSelectorComponent),
    multi: true
  }]
})
export class FinderSelectorComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() model: any;
  @Input() labelKey = 'label';
  @Input() valueKey = 'id';
  @Input() options: any[] = [];
  @Input() disabled = false;
  @Input() optionTpl!: TemplateRef<any>;
  @Input() formControl = new FormControl();

  @Output() selectionChange = new EventEmitter();
  @Output() closed = new EventEmitter();

  @ViewChild('origin') origin!: ElementRef<HTMLInputElement>;
  @ViewChild('dropdown') dropdown!: TemplateRef<any>

  public visibleOptions = 5;

  private overlayRef!: OverlayRef;
  private dropdownClosingActionsSub = Subscription.EMPTY;
  private isDropdownOpen = false;
  private originalOptions: any[] = [];
  private destroyed = new Subject();
  private value!: any;
  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private changeDetectorRef: ChangeDetectorRef,
    private elementRef: ElementRef<HTMLElement>,
    private overlay: Overlay,
  ) {}

  get isOpen(): boolean {
    return this.isDropdownOpen;
  }

  get label(): string {
    return this.model ? this.model[this.labelKey] : 'Select...';
  }

  ngOnInit(): void {
    this.originalOptions = [ ...this.options ];
    if (this.model !== undefined) {
      this.model = this.options.find(currentOption => currentOption[this.valueKey] === this.model);
    }

    this.formControl.valueChanges
      .pipe(takeUntil(this.destroyed))
      .subscribe(term => this.search(term));
  }

  ngOnDestroy(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
    this.destroyed.next(null);
    this.destroyed.complete()
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }

  public open(): void {
    if (this.isDropdownOpen) {
      return
    }
    this.openDropdown(this.dropdown, this.origin.nativeElement)
  }

  public close(): void {
    this.destroyDropdown();
  }

  public toggle(): void {
    this.isDropdownOpen ? this.close() : this.open();
  }

  public select(option: any): void {
    this.model = option;
    this.selectionChange.emit(option);
    this.close();
    this.writeValue(option);
  }

  public isActive(option: any): boolean {
    if (!this.model) {
      return false;
    }
    return option[this.valueKey] === this.model[this.valueKey];
  }

  public search(value: string): void {
    this.options = this.originalOptions.filter(option => option[this.labelKey].includes(value));
    requestAnimationFrame(() => (this.visibleOptions = this.options.length || 1));
  }

  private openDropdown(dropdownTpl: TemplateRef<any>, origin: HTMLElement): void {
    this.isDropdownOpen = true;
    this.overlayRef = this.overlay.create({
      width: origin.offsetWidth,
      scrollStrategy: this.overlay.scrollStrategies.reposition({ scrollThrottle: 0, autoClose: false }),
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(origin)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
            offsetY: 12,
          }
        ])
    });

    const templatePortal = new TemplatePortal(
      dropdownTpl,
      this.viewContainerRef
    );
    this.overlayRef.attach(templatePortal);

    this.dropdownClosingActionsSub = this.dropdownClosingActions()
      .subscribe(() =>  this.close());

    this.changeDetectorRef.markForCheck();
  }

  private dropdownClosingActions(): Observable<MouseEvent | unknown> {
    const outsidePointerEvents$ = this.overlayRef.outsidePointerEvents()
    const detachment$ = this.overlayRef.detachments();

    return merge(outsidePointerEvents$, detachment$).pipe(debounceTime(1));
  }

  private destroyDropdown(): void {
    if (!this.overlayRef || !this.isDropdownOpen) {
      return;
    }

    this.dropdownClosingActionsSub.unsubscribe();
    this.overlayRef.detach();
    this.isDropdownOpen = false;

    this.changeDetectorRef.markForCheck();
  }

  }
