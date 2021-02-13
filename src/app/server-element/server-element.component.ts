import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {
  @Input() serverElement: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log(`textContent: ${this.header.nativeElement.textContent}`);
    console.log(`contentParagraph: ${this.paragraph.nativeElement.textContent}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log(`contentParagraph: ${this.paragraph.nativeElement.textContent}`);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log(`textContent: ${this.header.nativeElement.textContent}`);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
