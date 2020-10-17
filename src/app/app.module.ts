import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ColorsComponent } from './colors/colors.component';
import { ColorDetailComponent } from './color-detail/color-detail.component';
import { ColorComponent } from './color/color.component';
@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    ColorDetailComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
