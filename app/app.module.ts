import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }        from './app.component';
import { UserDetailComponent } from './user-detail.component';
import { UsersComponent }      from './users.component';
import { UserService }         from './user.service';
import { UserSearchComponent } from './user-search.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [
                  AppComponent,
                  UsersComponent,
                  UserDetailComponent,
                  UserSearchComponent
                ],
  providers:    [ UserService ],
  bootstrap:    [ AppComponent, UserSearchComponent ]
})
export class AppModule { }
