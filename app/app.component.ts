import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
              <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
                  <form class="form-inline" id="head-btns">
                    <a class="router-link" routerLink="/home" routerLinkActive="active">Home</a>
                    <a class="router-link" routerLink="/about" routerLinkActive="active">About</a>
                  </form>
              </nav>
              <router-outlet></router-outlet>
            `
})
export class AppComponent { 
 }
