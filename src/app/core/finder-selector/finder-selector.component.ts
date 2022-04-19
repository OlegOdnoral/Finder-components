import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { merge, Observable, Subject, Subscription, takeUntil } from "rxjs";
import { FormControl } from "@angular/forms";
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { TemplatePortal } from "@angular/cdk/portal";

@Component({
  selector: 'finder-selector',
  templateUrl: './finder-selector.component.html',
  styleUrls: [ './finder-selector.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinderSelectorComponent implements OnInit, OnDestroy {

  @Input() model: any;
  @Input() labelKey = 'label';
  @Input() valueKey = 'id';
  @Input() options: any[] = [];
  @Input() disabled = false;
  @Input() optionTpl!: TemplateRef<any>;

  @Output() selectChange = new EventEmitter();
  @Output() closed = new EventEmitter();

  public visibleOptions = 5;
  public searchControl = new FormControl();

  private popperRef!: OverlayRef;
  private dropdownClosingActionsSub = Subscription.EMPTY;
  private isDropdownOpen = false;
  private originalOptions: any[] = [];
  private destroyed = new Subject();

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

    this.searchControl.valueChanges
      .pipe(takeUntil(this.destroyed))
      .subscribe(term => this.search(term));
  }

  ngOnDestroy(): void {
    if (this.popperRef) {
      this.popperRef.dispose();
    }
    this.destroyed.next(null);
    this.destroyed.complete()
  }

  public open(dropdownTpl: TemplateRef<any>, origin: HTMLElement): void {
    this.isDropdownOpen ? this.destroyDropdown() : this.openDropdown(dropdownTpl, origin);
  }

  public select(option: any): void {
    this.model = option;
    this.selectChange.emit(option[this.valueKey]);
    this.destroyDropdown();
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
    this.popperRef = this.overlay.create({
      hasBackdrop: true,
      width: origin.offsetWidth,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
            offsetY: 8,
            offsetX: 4
          }
        ])
    });

    const templatePortal = new TemplatePortal(
      dropdownTpl,
      this.viewContainerRef
    );
    this.popperRef.attach(templatePortal);

    this.dropdownClosingActionsSub = this.dropdownClosingActions()
      .subscribe(() => this.destroyDropdown());

    this.changeDetectorRef.markForCheck();
  }

  private dropdownClosingActions(): Observable<MouseEvent | unknown> {
    const backdropClick$ = this.popperRef.backdropClick();
    const detachment$ = this.popperRef.detachments();

    return merge(backdropClick$, detachment$);
  }

  private destroyDropdown(): void {
    if (!this.popperRef || !this.isDropdownOpen) {
      return;
    }

    this.dropdownClosingActionsSub.unsubscribe();
    this.isDropdownOpen = false;
    this.popperRef.detach();

    this.changeDetectorRef.markForCheck();
  }

}
