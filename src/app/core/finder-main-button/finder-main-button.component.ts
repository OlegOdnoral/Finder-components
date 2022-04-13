import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-finder-main-button',
  templateUrl: './finder-main-button.component.html',
  styleUrls: ['./finder-main-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinderMainButtonComponent {
  @Input() disabled = false;

  @Output() click: EventEmitter<void> =  new EventEmitter()
}
