import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() label = 'Default';
  @Input() disabled = false;

  @Output() click: EventEmitter<void> =  new EventEmitter();

  textArea = new FormControl('', [ Validators.required, Validators.min(10) ]);

  textBox = new FormControl('', [ Validators.required, Validators.min(10) ]);

  control = new FormControl();

  selected = 'option2';

  items = Array.from({ length: 10000 }).map((_, i) => ({
    id: i,
    label: `Item #${i}`
  })) as any;

  ngOnInit() {
    this.textArea.markAsTouched()
    this.textArea.markAsDirty()

    this.textBox.markAsTouched()
    this.textBox.markAsDirty()
    this.control.valueChanges.subscribe(data => console.log(data));
  }

  kek = 100;
  sms() {
    this.kek = this.kek + 1;
  }

  change($event: any) {
    console.log($event)
  }

  test(val: number) {
    console.log(val);
  }
}
