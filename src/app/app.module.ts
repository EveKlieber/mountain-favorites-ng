import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MountainCardComponent } from './mountain-card/mountain-card.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProfilRowComponent } from './profil-row/profil-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MountainCardComponent,
    ProposalsComponent,
    ProfilRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
