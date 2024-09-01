import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MissionComponent } from './pages/mission/mission.component';
import { NftComponent } from './pages/nft/nft.component';
import { ReferralsComponent } from './pages/referrals/referrals.component';
import { UpgradeSpeedComponent } from './pages/upgrade-speed/upgrade-speed.component';
import { NgModule } from '@angular/core';
import { UpgradeTimeComponent } from './pages/upgrade-time/upgrade-time.component';
import { ClaimComponent } from './pages/claim/claim.component';

export const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'mission', component: MissionComponent },
  { path: 'nft', component: NftComponent },
  { path: 'referrals', component: ReferralsComponent },
  { path: 'upgrade-speed', component: UpgradeSpeedComponent },
  { path: 'upgrade-time', component: UpgradeTimeComponent },
  { path: 'claim', component: ClaimComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
