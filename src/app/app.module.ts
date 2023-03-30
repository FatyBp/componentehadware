import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { ListadohadwareComponent } from './hadware/listadohadware/listadohadware.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    ListadohadwareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
