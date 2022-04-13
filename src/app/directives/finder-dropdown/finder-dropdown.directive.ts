import { Directive, HostBinding } from '@angular/core';


@Directive({
  selector: `mat-select[finder-dropdown]`
})
export class FinderDropdownDirective {
  @HostBinding('class') elementClass = 'finder-dropdown';
}
