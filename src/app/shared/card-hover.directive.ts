import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  constructor(public el: ElementRef,
    public renderer: Renderer2) {
    // el.nativeElement.style.backgroundColor = "#f9dede";
  }

  @HostListener('mouseover')
  onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card')
    this.renderer.setStyle(part, 'backgroundColor', '#f9dede');
  }

  @HostListener('mouseout')
  onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card')
    this.renderer.setStyle(part, 'backgroundColor', '#ffffff');
  }

}
