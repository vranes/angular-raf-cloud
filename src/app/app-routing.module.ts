import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../components/home/home.component";
import {LoginComponent} from "../components/login/login.component";
import {ListUsersComponent} from "../components/list-users/list-users.component";
import {ListUsersAuthGuard} from "../components/list-users/list-users-auth.guard";
import {EditUsersComponent} from "../components/edit-users/edit-users.component";
import {EditUsersAuthGuard} from "../components/edit-users/edit-users-auth.guard";
import {CreateUsersComponent} from "../components/create-users/create-users.component";
import {CreateUsersAuthGuard} from "../components/create-users/create-users-auth.guard";
import {NodeSearchComponent} from "../components/node-search/node-search.component";
import {NodeSearchAuthGuard} from "../components/node-search/node-search-auth.guard";

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
    path: "edit-users",
    component: EditUsersComponent,
    canActivate: [EditUsersAuthGuard]
  },
  {
    path: "add-users",
    component: CreateUsersComponent,
    canActivate: [CreateUsersAuthGuard]
  },
  {
    path: "nodes",
    component: NodeSearchComponent,
    canActivate: [NodeSearchAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
