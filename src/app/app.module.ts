import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule,RouterModule],
  declarations: [AppComponent, TestComponent],
  providers:[{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
