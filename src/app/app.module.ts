import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { HardsoftskillsComponent } from './components/hardsoftskills/hardsoftskills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutEditComponent } from './components/about-edit/about-edit.component';
import { EducationEditComponent } from './components/education-edit/education-edit.component';
import { ExperienceEditComponent } from './components/experience-edit/experience-edit.component';
import { HardsoftskillsEditComponent } from './components/hardsoftskills-edit/hardsoftskills-edit.component';
import { HeaderEditComponent } from './components/header-edit/header-edit.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ProjectsEditComponent } from './components/projects-edit/projects-edit.component';
import { FooterEditComponent } from './components/footer-edit/footer-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    HardsoftskillsComponent,
    ProjectsComponent,
    EditPageComponent,
    HomePageComponent,
    LoginPageComponent,
    AboutEditComponent,
    EducationEditComponent,
    ExperienceEditComponent,
    HardsoftskillsEditComponent,
    HeaderEditComponent,
    ProfileEditComponent,
    ProjectsEditComponent,
    FooterEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
