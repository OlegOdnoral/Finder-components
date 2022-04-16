import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { debounceTime, merge, Observable, Subscription } from "rxjs";
import { FormControl } from "@angular/forms";
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { TemplatePortal } from "@angular/cdk/portal";

@Component({
  selector: 'finder-selector',
  templateUrl: './finder-selector.component.html',
  styleUrls: [ './finder-selector.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinderSelectorComponent implements OnInit, OnDestroy {
  // @ts-ignore
  @Input() model;
  @Input() labelKey = 'label';
  @Input() idKey = 'id';
  @Input() options = [];
  // @ts-ignore
  @Input() optionTpl: TemplateRef<any>;
  @Output() selectChange = new EventEmitter();
  @Output() closed = new EventEmitter();

  private dropdownClosingActionsSub = Subscription.EMPTY;
  private isDropdownOpen = false;

  visibleOptions = 5;
  searchControl = new FormControl();

  // @ts-ignore
  private view: EmbeddedViewRef<any>;
  // @ts-ignore
  private popperRef: OverlayRef;
  private originalOptions = [];

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private changeDetectorRef: ChangeDetectorRef,
    private elementRef: ElementRef<HTMLElement>,
    private overlay: Overlay,
  ) {}

  ngOnInit(): void {
    this.originalOptions = [ ...this.options ];
    if (this.model !== undefined) {
      this.model = this.options.find(currentOption => currentOption[this.idKey] === this.model);
    }

    this.searchControl.valueChanges
      .pipe(debounceTime(300),)
      .subscribe(term => this.search(term));
  }

  ngOnDestroy(): void {
    if (this.popperRef) {
      this.popperRef.dispose();
    }
  }

  get isOpen(): boolean {
    return this.isDropdownOpen;
  }

  get label(): string {
    return this.model ? this.model[this.labelKey] : 'Select...';
  }

  public open(dropdownTpl: TemplateRef<any>, origin: HTMLElement): void {
    this.isDropdownOpen ? this.destroyDropdown() : this.openDropdown(dropdownTpl, origin);
  }

  // @ts-ignore
  public select(option): void {
    this.model = option;
    this.selectChange.emit(option[this.idKey]);
    // the handleClickOutside function will close the dropdown
    this.destroyDropdown();
  }

  // @ts-ignore
  public isActive(option): boolean {
    if (!this.model) {
      return false;
    }
    return option[this.idKey] === this.model[this.idKey];
  }

  public search(value: string): void {
    // @ts-ignore
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
