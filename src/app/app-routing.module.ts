import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScssIntroComponent } from './scss-intro/scss-intro.component';
import { NatoursComponent } from './natours/natours.component';
import { SearchComponent } from './find-friend/search/search.component';

const routes: Routes = [
  { path: 'scss', component: ScssIntroComponent },
  { path: 'natours', component: NatoursComponent },
  { path: 'searchapp', component: SearchComponent },
  { path: '', redirectTo: '/scss', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
