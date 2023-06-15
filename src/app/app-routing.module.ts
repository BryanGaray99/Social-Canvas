import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NoPagesFoundComponent } from './pages/no-pages-found/no-pages-found.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesComponent } from './pages/pages/pages.component';

const routes: Routes = [
  { path: "",
    component: PagesComponent,
    children: [
      { path: 'MainPage', component: MainPageComponent },
      { path: "", redirectTo: "/MainPage", pathMatch: "full" },
    ]
  },

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },

  { path: "**", component: NoPagesFoundComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainPageComponent, LoginComponent]