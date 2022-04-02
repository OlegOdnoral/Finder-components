import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() label = 'Default';
  @Input() disabled = false;

  @Output() click: EventEmitter<void> =  new EventEmitter()
}
