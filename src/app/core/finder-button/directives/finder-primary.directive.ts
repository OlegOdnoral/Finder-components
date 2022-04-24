import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input, OnChanges, OnInit,
  Renderer2, ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appFinderPrimary]',
})
export class FinderPrimaryDirective implements OnInit {

  @Input('appFinderPrimaryVal') set value(val: number) {
    const hint: HTMLElement = this.elRef.nativeElement.querySelector('.thumb-alpha');
    if (!hint) {
      const div: HTMLElement = this.renderer2.createElement('div')
      div.classList.add('thumb-alpha')
      div.innerText = `${val}`;
      for (const [key, value] of Object.entries(this.styles)) {
        this.renderer2.setStyle(div, key, value)
      }
      this.renderer2.appendChild(this.elRef.nativeElement, div)
    } else {
      hint.innerText = `${val}`;
    }

  }

  private readonly styles = {
    'padding': '1px 5px',
    'float': 'left',
    'min-height': '20px',
    'min-width': '20px',
    'background-color': '#F5A04B',
    'color': '#fff',
    'border-radius': '100px',
    'position': 'absolute',
    'right': '10px',
    'top': '-10px',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  }

  constructor(
    private elRef: ElementRef,
    private renderer2: Renderer2,
  ) { }

  ngOnInit() {
    this.renderer2.setStyle(this.elRef.nativeElement, 'position', 'relative')
  }

}
