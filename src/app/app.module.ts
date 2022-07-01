import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CartpageComponent } from './pages/cartpage/cartpage.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SidedrawerComponent } from './components/sidedrawer/sidedrawer.component';
import { SneakeritemComponent } from './components/sneakeritem/sneakeritem.component';
import { SneakerpageComponent } from './pages/sneakerpage/sneakerpage.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';
import { CartitemComponent } from './components/cartitem/cartitem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CartpageComponent,
    SignInPageComponent,
    RegisterPageComponent,
    SidedrawerComponent,
    SneakeritemComponent,
    SneakerpageComponent,
    BackdropComponent,
    CartitemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
