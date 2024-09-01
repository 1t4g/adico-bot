import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'adico-claim',
  templateUrl: './claim.component.html',
  styleUrl: './claim.component.scss'
})
export class ClaimComponent {

  // @HostListener('document:click', ['$event'])
  // handleClick(event: MouseEvent): void {
  //   debugger;
  //   const clickedElement = event.target as HTMLElement;
  //   const isClickInsideClaim = this.el.nativeElement.querySelector('.claim').contains(clickedElement);
  //
  //   if (!isClickInsideClaim) {
  //     this.router.navigate(['/']);
  //   }
  // }

  constructor(private router: Router,  private el: ElementRef) {
  }

}
