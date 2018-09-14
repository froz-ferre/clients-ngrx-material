import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appActivate]'
})
export class ActivateDirective {

  static prevEl: ElementRef;

  @HostListener('click') onClick() {
    if (ActivateDirective.prevEl) { this.renderer.removeClass(ActivateDirective.prevEl.nativeElement, 'active'); }
    this.renderer.addClass(this.element.nativeElement, 'active');
    ActivateDirective.prevEl = this.element;
}
  constructor(private element: ElementRef,
              private renderer: Renderer2) { }

}
