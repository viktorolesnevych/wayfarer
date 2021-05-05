import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRedHover]'
})

// changes background color to what the header is and font color to light one
export class RedHoverDirective {

  clickedElement: ElementRef;
  constructor(private renderer: Renderer2, private ele: ElementRef) {
  }

  private changeBackground(color: string): void {
    this.ele.nativeElement.style.background = color;
    this.renderer.removeClass(this.ele.nativeElement.children[1].children[0], 'text-dark');
    this.renderer.addClass(this.ele.nativeElement.children[1].children[0], 'text-light');
  }


  @HostListener('mouseenter') onMouseEnter(): void {
    this.changeBackground('#212629');
  }

  @HostListener('mouseleave') onMouseLeave(element: ElementRef = null): void {
        this.changeBackground(null);
        this.renderer.removeClass(this.ele.nativeElement.children[1].children[0], 'text-light');
        this.renderer.addClass(this.ele.nativeElement.children[1].children[0], 'text-dark');
    }
}
