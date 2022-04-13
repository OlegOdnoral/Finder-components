import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() label = 'Default';
  @Input() disabled = false;

  @Output() click: EventEmitter<void> =  new EventEmitter();

  selected = 'option2';

  items = Array.from({ length: 10000 }).map((_, i) => ({
    id: i,
    label: `Item #${i}`
  })) as any;

  change($event: any) {
  }

  test(val: number) {
    console.log(val);
  }
}
