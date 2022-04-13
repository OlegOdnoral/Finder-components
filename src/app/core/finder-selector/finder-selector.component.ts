import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EmbeddedViewRef, EventEmitter,
  Input, NgZone,
  OnDestroy,
  OnInit, Output, TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { debounceTime, filter, fromEvent, takeUntil } from "rxjs";
import { FormControl } from "@angular/forms";
import Popper from 'popper.js';
import { Overlay, OverlayRef } from "@angular/cdk/overlay";

@Component({
  selector: 'finder-selector',
  templateUrl: './finder-selector.component.html',
  styleUrls: ['./finder-selector.component.scss'],
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

  visibleOptions = 4;
  searchControl = new FormControl();

  // @ts-ignore
  private view: EmbeddedViewRef<any>;
  // @ts-ignore
  private popperRef: any;
  private originalOptions = [];

  constructor(
    private vcr: ViewContainerRef,
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
    private overlay: Overlay
  ) {}

  get isOpen() {
    return !!this.popperRef;
  }

  ngOnInit() {
    this.originalOptions = [ ...this.options ];
    if (this.model !== undefined) {
      this.model = this.options.find(currentOption => currentOption[this.idKey] === this.model);
    }

    this.searchControl.valueChanges
      .pipe(debounceTime(300),)
      .subscribe(term => this.search(term));
  }

  get label() {
    return this.model ? this.model[this.labelKey] : 'Select...';
  }

  open(dropdownTpl: TemplateRef<any>, origin: HTMLElement) {
    this.view = this.vcr.createEmbeddedView(dropdownTpl);
    const dropdown = this.view.rootNodes[0];

    document.body.appendChild(dropdown);
    dropdown.style.width = `${ origin.offsetWidth }px`;

    this.zone.runOutsideAngular(() => {
      this.popperRef = this.overlay.create({
        hasBackdrop: false,
        width: origin.offsetWidth
      });
      // this.popperRef = new Popper(origin, dropdown, {
      //   removeOnDestroy: true
      // });
    });

    this.handleClickOutside();
  }

  close() {
    this.closed.emit();
    // this.popperRef.destroy();
    this.view.destroy();
    this.searchControl.patchValue('');
    // @ts-ignore
    this.view = null;
    // @ts-ignore
    this.popperRef = null;
  }

  // @ts-ignore
  select(option) {
    this.model = option;
    this.selectChange.emit(option[this.idKey]);
    // the handleClickOutside function will close the dropdown
  }
  // @ts-ignore
  isActive(option) {
    if (!this.model) {
      return false;
    }
    return option[this.idKey] === this.model[this.idKey];
  }

  search(value: string) {
    // @ts-ignore
    this.options = this.originalOptions.filter(option => option[this.labelKey].includes(value));
    requestAnimationFrame(() => (this.visibleOptions = this.options.length || 1));
  }

  private handleClickOutside() {
    fromEvent(document, 'click')
      .pipe(
        filter(({ target }) => {
          const origin = this.popperRef.hostElement;
          return origin.contains(target as HTMLElement) === false;
        }),
        takeUntil(this.closed)
      )
      .subscribe(() => {
        this.close();
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {}

}
