import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-finder-button',
  templateUrl: './finder-button.component.html',
  styleUrls: ['./finder-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinderButtonComponent {
  @Input() label = 'Default';
  @Input() disabled = false;

  @Output() click: EventEmitter<void> =  new EventEmitter()
}
