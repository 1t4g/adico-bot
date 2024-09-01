import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './pages/main/main.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReferralsComponent } from './pages/referrals/referrals.component';
import { UpgradeTimeComponent } from './pages/upgrade-time/upgrade-time.component';
import { ClaimComponent } from './pages/claim/claim.component';
import { UpgradeSpeedComponent } from './pages/upgrade-speed/upgrade-speed.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ReferralsComponent,
    UpgradeTimeComponent,
    ClaimComponent,
    UpgradeSpeedComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {
}
