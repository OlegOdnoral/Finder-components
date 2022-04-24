import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-finder-button',
  templateUrl: './finder-button.component.html',
  styleUrls: [ './finder-button.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinderButtonComponent {
  @Input() disabled = false;
  @Input() icon!: string;
  @Input() type: 'primary' | 'secondary' | 'tetriary' = 'primary';
}
