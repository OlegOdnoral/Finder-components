import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-finder-button',
  templateUrl: './finder-button.component.html',
  styleUrls: ['./finder-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinderButtonComponent extends MatButton {
}
