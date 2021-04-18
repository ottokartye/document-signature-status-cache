import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ESignService } from './e-sign.service';
import { ListComponent } from './list/list.component';
import { ListService } from './list/list.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ListService, ESignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
