import { Component, OnInit } from '@angular/core';
import {User} from "../../model/model";
import {Router} from "@angular/router";
import {ListUsersService} from "../../services/list-users.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[] = []

  constructor(private route:Router, private service: ListUsersService) {this.getAll()}

  ngOnInit(): void {
  }

  getAll() {
    this.users = []
    this.service.getAll().subscribe((wrapper) => {
      this.users = wrapper
    })
  }

  editUser(user: User) {
    // this.editService.setUser(user.userId, user.email, user.name, user.surname,String(user.permissions), user.password)
    // this.route.navigate(['/editor']);
  }
}
