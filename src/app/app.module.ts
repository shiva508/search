import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NatoursComponent } from './natours/natours.component';
import { NatourHeaderComponent } from './natours/natour-header/natour-header.component';
import { ScssIntroComponent } from './scss-intro/scss-intro.component';
import { FindFriendComponent } from './find-friend/find-friend.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './find-friend/search/search.component';
import { EditComponent } from './find-friend/edit/edit.component';
import { GridIntroComponent } from './grid-intro/grid-intro.component';
import { AboutusComponent } from './natours/aboutus/aboutus.component';
import { FeatuesComponent } from './natours/featues/featues.component';
import { MatIconModule } from '@angular/material/icon';
import { PopularToursComponent } from './natours/popular-tours/popular-tours.component';

@NgModule({
  declarations: [
    AppComponent,
    NatoursComponent,
    NatourHeaderComponent,
    ScssIntroComponent,
    FindFriendComponent,
    SearchComponent,
    EditComponent,
    GridIntroComponent,
    AboutusComponent,
    FeatuesComponent,
    PopularToursComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
