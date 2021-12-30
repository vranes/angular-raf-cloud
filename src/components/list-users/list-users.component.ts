import { Component, OnInit } from '@angular/core';
import {User} from "../../model/model";
import {Router} from "@angular/router";
import {ListUsersService} from "../../services/list-users.service";
import {EditUsersService} from "../../services/edit-users.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[] = []

  constructor(private route:Router, private service: ListUsersService, private editService: EditUsersService) {this.getAll()}

  ngOnInit(): void {
  }

  getAll() {
    this.users = []
    this.service.getAll().subscribe((list) => {
      list.forEach(wrapper => {
        let user: User = new User()
        user.permissions = wrapper.permissions
        user.surname = wrapper.surname
        user.name = wrapper.name
        user.email = wrapper.email
        user.id = wrapper.id
        user.password = wrapper.password
        this.users.push(user)
      })
    })
  }

  editUser(user: User) {
    this.editService.setUser(user)
    this.route.navigate(['/edit-users']);
  }
}
