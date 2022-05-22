import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EntryComponent } from './User/entry/entry.component';
import { ArticleComponent } from './room/article/article.component';
import { RoomComponent } from './room/room.component';
import { ProfileComponent } from './User/profile/profile.component';

import { AppRoutingModule } from './app-routing.module';
import { EntryModule } from './User/entry/entry.module';
import {MatCardModule} from '@angular/material/card';

import { UserService } from './services/user.service';

import { UserTokenInterceptor } from './User/interceptors/user.interceptor';
import { AuthenticationInterceptor } from './User/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryComponent,
    RoomComponent,
    ArticleComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    EntryModule,
    BrowserAnimationsModule,
  ],
  providers: [UserService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: UserTokenInterceptor,
    multi: true
  },
  { provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
