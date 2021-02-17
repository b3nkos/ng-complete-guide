import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseover(eventData: Event): void {
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'background-color', 'blue');

    this.renderer.setStyle(this.elementRef.nativeElement,
      'color', 'white');

    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event): void {
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'background-color', 'transparent');

    this.renderer.setStyle(this.elementRef.nativeElement,
      'color', 'black');

    this.backgroundColor = 'transparent';
  }

}
