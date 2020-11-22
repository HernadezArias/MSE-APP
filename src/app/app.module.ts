import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app.routes'

import { HogwartsService } from './services/hogwarts.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HouseComponent } from './components/house/house.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MembersComponent } from './components/members/members.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HouseComponent,
    NavbarComponent,
    FooterComponent,
    MembersComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [HogwartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
