import { Directive, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';

/*
.finder-button {
  min-width: 200px;
  padding: 18px 21px;
  border: none;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  align-items: center;

  mat-icon {
    height: 18px;
    width: 18px;
    font-size: 18px;
  }

.button-content {
    flex-basis: 100%;
  }
}
*/

@Directive({
  selector: 'button[appFButton]'
})
export class FButtonDirective implements OnInit {

  styles = {
    'min-width': '200px',
    'padding': '18px 21px',
    'border': 'none',
    'font-family': "'Nunito Sans', sans-serif",
    'font-size': '16px',
    'font-weight': 'bold',
    'border-radius': '5px',
    'display': 'flex',
    'align-items': 'center',
  }

  @HostBinding('class')
  elementClass = 'finder-button';

  constructor(private elRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    for (const [key, value] of Object.entries(this.styles)) {
      this.renderer2.setStyle(this.elRef.nativeElement, key, value);
    }
  }

}
