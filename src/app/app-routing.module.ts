import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpageComponent } from './pages/cartpage/cartpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SneakerpageComponent } from './pages/sneakerpage/sneakerpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'sneaker/:id', component: SneakerpageComponent },
  { path: 'cart', component: CartpageComponent },
  { path: 'login', component: SignInPageComponent },
  { path: 'register', component: RegisterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
