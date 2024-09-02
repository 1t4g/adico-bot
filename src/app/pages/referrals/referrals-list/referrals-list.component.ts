import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'adico-referrals-list',
  templateUrl: './referrals-list.component.html',
  styleUrl: './referrals-list.component.scss'
})
export class ReferralsListComponent {

  public isOpenWindowReferrals = false;

  public referralsUser = [{
    id: 1,
    name: 'Eagle',
    url: 'https://google.com'
  }, {
    id: 2,
    name: 'Главный дедус',
    url: 'https://vk.com'
  }]

  constructor(private router: Router) {
  }

  public openReferrals(): void {
    this.isOpenWindowReferrals = true
  }

  public navigate(url: string): void {
    this.router.navigateByUrl(`/${url}`);
  }
}
