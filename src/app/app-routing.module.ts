import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../components/home/home.component";
import {LoginComponent} from "../components/login/login.component";
import {ListUsersComponent} from "../components/list-users/list-users.component";
import {ListUsersAuthGuard} from "../components/list-users/list-users-auth.guard";
import {AddUsersComponent} from "../components/add-users/add-users.component";
import {AddUsersAuthGuard} from "../components/add-users/add-users-auth.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "list-users",
    component: ListUsersComponent,
    canActivate: [ListUsersAuthGuard]
  },
  {
    path: "add-users",
    component: AddUsersComponent,
    canActivate: [AddUsersAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
