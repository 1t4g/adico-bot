import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'adico-referrals',
  templateUrl: './referrals.component.html',
  styleUrl: './referrals.component.scss'
})
export class ReferralsComponent {

  public isOpenWindowReferrals = false;

  public referralsUser = [{
    name: 'Eagle',
    url: 'https://google.com'
  }, {
    name: 'Главный дедус',
    url: 'https://vk.com'
  }]

  constructor(private router: Router) {
  }

  public openReferrals(): void {
    this.isOpenWindowReferrals = true
  }

  public test(): void {
    debugger;
  }

  public navigate(url: string): void {
    this.router.navigateByUrl(`/${url}`);
  }
}
