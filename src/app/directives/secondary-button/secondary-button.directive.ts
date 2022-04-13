import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: `button[mat-button][finder-secondary-button],
             button[mat-raised-button][finder-secondary-button],
             button[mat-icon-button][finder-secondary-button],
             button[mat-fab][finder-secondary-button],
             button[mat-mini-fab][finder-secondary-button],
             button[mat-stroked-button][finder-secondary-button],
             button[mat-flat-button][finder-secondary-button]`
})
export class SecondaryButtonDirective {
  @HostBinding('class') elementClass = 'finder-secondary-button';
}
