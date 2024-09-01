import { Component, HostListener, OnInit } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'adico-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  public telegramUser?: any;
  public avatarUrl: string = '';

  constructor(private telegramService: TelegramService,
              private router: Router) {
  }


  ngOnInit() {
    this.telegramService.getUpdates().pipe(
      switchMap(response => {
        this.telegramUser = response?.result?.[1]?.message?.from;
        return this.telegramUser ? this.telegramService.getUserProfilePhotos(this.telegramUser.id) : of(null);
      }),
      switchMap(profilePhotos => {
        const fileId = profilePhotos?.result?.photos?.[0]?.[0]?.file_id;
        return fileId ? this.telegramService.getFile(fileId) : of(null);
      }),
      map(fileResponse => this.telegramService.getFileUrl(fileResponse?.result?.file_path)),
      catchError(error => {
        console.error('Error fetching user avatar:', error);
        return of(null);
      })
    ).subscribe(url => this.avatarUrl = url || '');
  }

  public navigate(url: string): void {
    this.router.navigateByUrl(`/${url}`);
  }
}
