import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'adico-mission',
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss'
})
export class MissionComponent {

  constructor(private router: Router) {
  }

  public navigate(url: string): void {
    this.router.navigateByUrl(`/${url}`);
  }
}
