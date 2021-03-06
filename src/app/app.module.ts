import { SwotComponent } from './components/swot/swot.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ViewAssociateComponent } from './components/view-associate/view-associate.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';

import { UpdateItemComponent } from './components/update-item/update-item.component';
import { ViewSwotComponent } from './components/view-swot/view-swot.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { CorsInterceptor } from './services/interceptor/cors.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ViewAssociateComponent,
    SwotComponent,
    LoginComponent,
    HomeComponent,
    ViewSwotComponent,
    UpdateItemComponent,
    AddItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS, useClass: CorsInterceptor, multi: true 
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
