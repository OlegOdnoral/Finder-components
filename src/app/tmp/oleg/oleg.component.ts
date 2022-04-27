import { ChangeDetectionStrategy, Component, HostBinding, HostListener } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger, AnimationEvent } from "@angular/animations";

@Component({
  selector: 'app-oleg',
  templateUrl: './oleg.component.html',
  styleUrls: [ './oleg.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('myAnimationTrigger', [
      state(
        'show',
        style({
          opacity: 1,
          // backgroundColor: 'green',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          // backgroundColor: 'green',
        })
      ),
      transition('show => hide', [ animate('5s linear', keyframes([
        style({ opacity: 1, offset: 0 }),
        style({ opacity: 1, offset: 0.6 }),
        style({ opacity: 0, offset: 1 })
      ])) ]),
    ]),
  ],
})
export class OlegComponent {

  todoList: { str: string; status: string }[] = [];

  dataReady: boolean = false;

  @HostListener('@myAnimationTrigger.done', [ '$event' ]) navigateToRecruiter($event: AnimationEvent): void {
    console.log($event.toState);
  }

  @HostBinding('@myAnimationTrigger') get myAnimationTrigger(): string {
    return this.todoList.length > 2 ? 'hide' : 'show';
  }

  addItem() {
    this.todoList.push({
      str: 'added d :' + this.todoList.length,
      status: 'active',
    });
  }

  deleteRandom() {
    const num = Math.ceil(Math.random() * this.todoList.length);
    this.todoList.splice(num, 1);
  }
}
