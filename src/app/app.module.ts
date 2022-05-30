import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule} from '@angular/google-maps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StudiesComponent } from './components/studies/studies.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { Error404ComponentComponent } from './components/error404-component/error404-component.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioInitComponent } from './components/portfolio-init/portfolio-init.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service';
import { InterceptorService } from './servicios/interceptor.service';


@NgModule({
  declarations: [AppComponent,HeaderComponent,HomeComponent,AboutComponent,StudiesComponent,SkillsComponent,ContactComponent,FooterComponent,ProjectsComponent, ExperienceComponent, Error404ComponentComponent, LoginComponent, PortfolioInitComponent],
  imports: [AppRoutingModule, BrowserModule, GoogleMapsModule, BrowserAnimationsModule, HttpClientModule, ReactiveFormsModule],
  providers: [PortfolioService,
  {provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
