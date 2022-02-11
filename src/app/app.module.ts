import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "../components/home/home.component";
import {LoginComponent} from "../components/login/login.component";
import { ListUsersComponent } from '../components/list-users/list-users.component';
import { EditUsersComponent } from '../components/edit-users/edit-users.component';
import { CreateUsersComponent } from '../components/create-users/create-users.component';
import { NodeSearchComponent } from '../components/node-search/node-search.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListUsersComponent,
    EditUsersComponent,
    CreateUsersComponent,
    NodeSearchComponent
  ],
  imports: [
    BrowserModule,      // modul za ng for iteracije za dinamicko generisanje htmla itd
    AppRoutingModule,
    FormsModule,        // ng model for two way binding
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // registracija osnovne prve komponente koja ce biti prikazana
})
export class AppModule { }
