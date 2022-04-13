import { Directive, HostBinding, } from '@angular/core';

@Directive({
  selector: `button[mat-button][finder-main-button],
             button[mat-raised-button][finder-main-button],
             button[mat-icon-button][finder-main-button],
             button[mat-fab][finder-main-button],
             button[mat-mini-fab][finder-main-button],
             button[mat-stroked-button][finder-main-button],
             button[mat-flat-button][finder-main-button]`
})
export class MainButtonDirective {
  @HostBinding('class') elementClass = 'finder-main-button';
}
