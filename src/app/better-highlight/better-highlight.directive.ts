import {
  Directive, ElementRef, HostBinding,
  HostListener, Input, OnInit, Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(): void {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(): void {
    this.backgroundColor = this.defaultColor;
  }
}
