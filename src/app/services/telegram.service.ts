import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private botToken = '7030446481:AAEckUdTsLy8AWmwu1fNIgvnh_aV2F65XtU';
  private apiUrl = `https://api.telegram.org/bot${this.botToken}`;

  constructor(private http: HttpClient) { }

  // Получение фотографий профиля пользователя
  getUserProfilePhotos(userId: number): Observable<any> {
    const url = `${this.apiUrl}/getUserProfilePhotos?user_id=${userId}`;
    return this.http.get(url);
  }

  // Получение обновлений от Telegram
  getUpdates(): Observable<any> {
    const url = `${this.apiUrl}/getUpdates`;
    return this.http.get(url);
  }

  // Получение файла по file_id
  getFile(fileId: string): Observable<any> {
    const url = `${this.apiUrl}/getFile?file_id=${fileId}`;
    return this.http.get(url);
  }

  // Получение URL для загрузки файла
  getFileUrl(filePath: string): string {
    return `https://api.telegram.org/file/bot${this.botToken}/${filePath}`;
  }
}
