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

@NgModule({
  declarations: [
    AppComponent,
    NatoursComponent,
    NatourHeaderComponent,
    ScssIntroComponent,
    FindFriendComponent,
    SearchComponent,
    EditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
