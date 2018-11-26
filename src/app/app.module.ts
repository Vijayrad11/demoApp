import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HtmlComponent } from './dashboard/html/html.component';
import { CssComponent } from './dashboard/css/css.component';

const routes: Routes = [
  { path: '', loadChildren:'./admin/login/admin.module#AdminModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HtmlComponent,
    CssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
