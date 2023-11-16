import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ViewModule } from './view/view.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RecetasService } from './service/receta.service';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    ViewModule,
    
  ],
  providers: [
    RecetasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
