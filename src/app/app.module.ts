import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CardsComponent } from './pages/cards/cards.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { NoPagesFoundComponent } from './pages/no-pages-found/no-pages-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesComponent } from './pages/pages/pages.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { WsCanvasComponent } from './pages/ws-canvas/ws-canvas.component';
// import { FbCanvasComponent } from './pages/fb-canvas/fb-canvas.component';
// import { IgCanvasComponent } from './pages/ig-canvas/ig-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CardsComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NoPagesFoundComponent,
    RegisterComponent,
    PagesComponent,
    // WsCanvasComponent,
    // FbCanvasComponent,
    // IgCanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
