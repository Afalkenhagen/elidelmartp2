import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LogoComponent } from './components/logo/logo.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ArticleComponent } from './components/article/article.component';
import { FooterComponent } from './components/footer/footer.component';
import { ObrasComponent } from './pages/obras/obras.component';
import { AutoraComponent } from './pages/autora/autora.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { BlogComponent } from './pages/blog/blog.component';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LogoComponent,
    CarouselComponent,
    ArticleComponent,
    FooterComponent,
    ObrasComponent,
    AutoraComponent,
    ContactoComponent,
    NovedadesComponent,
    BlogComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
