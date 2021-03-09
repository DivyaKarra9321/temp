import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursepageBodyComponent } from './coursepage-body/coursepage-body.component';
import { FooterComponent } from './footer/footer.component';
import { CourseCartComponent } from './course-cart/course-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MycoursePageComponent } from './mycourse-page/mycourse-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursepageBodyComponent,
    FooterComponent,
    CourseCartComponent,
    MycoursePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
