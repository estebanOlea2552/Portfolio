import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CursorComponent } from './shared/components/cursor/cursor.component';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CursorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TopBarComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
