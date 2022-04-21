import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-finder-validation-message',
  templateUrl: './finder-validation-message.component.html',
  styleUrls: ['./finder-validation-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinderValidationMessageComponent {
  @Input() type: 'info' | 'success' | 'waring' | 'error' = 'info';
}
