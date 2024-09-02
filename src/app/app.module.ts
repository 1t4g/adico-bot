import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './pages/main/main.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { UpgradeTimeComponent } from './pages/upgrade-time/upgrade-time.component';
import { ClaimComponent } from './pages/claim/claim.component';
import { UpgradeSpeedComponent } from './pages/upgrade-speed/upgrade-speed.component';
import { MissionComponent } from './pages/mission/mission.component';
import { MissionWindowComponent } from './pages/mission/mission-window/mission-window.component';
import { NftComponent } from './pages/nft/nft.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { ReferralsListComponent } from './pages/referrals/referrals-list/referrals-list.component';
import { ReferralsLinkComponent } from './pages/referrals/referrals-link/referrals-link..component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UpgradeTimeComponent,
    ClaimComponent,
    UpgradeSpeedComponent,
    MissionComponent,
    ComingSoonComponent,
    MissionWindowComponent,
    NftComponent,
    ReferralsListComponent,
    ReferralsLinkComponent
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
