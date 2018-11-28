import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavModule } from './nav/nav.module';
import { HeaderModule } from './header/header.module';
import { IllustratorModule } from './illustrator/illustrator.module';
import { MayaModule } from './maya/maya.module';
import { PhotoshopModule } from './photoshop/photoshop.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    HomeModule,
    NavModule,
    IllustratorModule,
    MayaModule,
    PhotoshopModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
