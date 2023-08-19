import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { SeriesComponent } from './series/series.component';
import { XComponent } from './x-component/x-component.component';
import { YComponent } from './y-component/y-component.component';
import { DynamicPhoneFormComponent } from './dynamic-phone-form/dynamic-phone-form.component';
import { BottomLeftComponent } from './bottom-left/bottom-left.component';
import { BottomRightComponent } from './bottom-right/bottom-right.component';
import { CenterComponent } from './center/center.component';
import { TopLeftComponent } from './top-left/top-left.component';
import { TopRightComponent } from './top-right/top-right.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    SeriesComponent,
    XComponent,
    YComponent,
    DynamicPhoneFormComponent,
    BottomLeftComponent,
    BottomRightComponent,
    CenterComponent,
    TopLeftComponent,
    TopRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
