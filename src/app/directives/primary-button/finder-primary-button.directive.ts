import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: `button[mat-button][finder-primary-button],
             button[mat-raised-button][finder-primary-button],
             button[mat-icon-button][finder-primary-button],
             button[mat-fab][finder-primary-button],
             button[mat-mini-fab][finder-primary-button],
             button[mat-stroked-button][finder-primary-button],
             button[mat-flat-button][finder-primary-button]`
})
export class FinderPrimaryButtonDirective {
  @HostBinding('class') elementClass = 'finder-primary-button';
}
