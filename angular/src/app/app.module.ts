import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MainNavComponent } from './nav/main-nav/main-nav.component';
import { FooterNavComponent } from './nav/footer-nav/footer-nav.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleService } from './services/article.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArticleComponent } from './pages/article/article.component';
import { UrlFormatPipe } from './pipes/url-format.pipe';
import { RecentPostsComponent } from './components/recent-posts/recent-posts.component';
import { AlertifyService } from './services/alertify.service';
import { ArchivePostsComponent } from './components/archive-posts/archive-posts.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgProgressModule } from 'ngx-progressbar';
import { ProgressBarService } from './services/progress-bar.service';
import { ProgressBarInterceptor } from './interceptors/progress-bar.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainNavComponent,
    FooterNavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ArticleComponent,
    UrlFormatPipe,
    RecentPostsComponent,
    ArchivePostsComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule,
    NgProgressModule,
  ],
  providers: [
    ArticleService,
    AlertifyService,
    ProgressBarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressBarInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
