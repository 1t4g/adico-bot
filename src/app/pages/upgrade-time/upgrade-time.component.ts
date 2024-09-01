import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'adico-upgrade-time',
  templateUrl: './upgrade-time.component.html',
  styleUrl: './upgrade-time.component.scss'
})
export class UpgradeTimeComponent {

  constructor(private router: Router) {
  }

  public navigate(url: string): void {
    this.router.navigateByUrl(`/${url}`);
  }
}
