import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent }   from './app.component';
import { UserComponent }   from './components/user.component';
import { AboutComponent }   from './components/about.component';
import { PageNotFoundComponent }   from './components/PageNotFound';
import { routing }   from './app.routing';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot(), FormsModule, HttpModule, routing],
  declarations: [ AppComponent, UserComponent, AboutComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
