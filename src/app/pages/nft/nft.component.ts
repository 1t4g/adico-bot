import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'adico-nft',
  templateUrl: './nft.component.html',
  styleUrl: './nft.component.scss'
})
export class NftComponent {

  constructor(private router: Router) {
  }

  public navigate(url: string): void {
    this.router.navigateByUrl(`/${url}`);
  }
}
