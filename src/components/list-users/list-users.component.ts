import { Component, OnInit } from '@angular/core';
import {User} from "../../model/model";
import {Router} from "@angular/router";
import {ListUsersService} from "../../services/list-users.service";
import {EditUsersService} from "../../services/edit-users.service";
import {LoginService} from "../../services/login.service";
import {DeleteUsersService} from "../../services/delete-users.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[] = []
  deletePermission: boolean
  errorMessage: string = ''

  constructor(private route:Router, private service: ListUsersService, private editService: EditUsersService, private loginService: LoginService, private deleteService: DeleteUsersService) {
    this.getAll()
    this.deletePermission = loginService.getPermissions().includes("can_delete_users")
  }

  ngOnInit(): void {
  }

  getAll() {
    this.users = []
    this.service.getAll().subscribe((list) => {
      this.errorMessage = ''
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
    }, error => {
      this.errorMessage = 'Something went wrong.'
    })
  }

  editUser(user: User) {
    this.editService.setUser(user)
    this.route.navigate(['/edit-users']);
  }

  deleteUser(user: User) {
    this.deleteService.deleteUser(user.id).subscribe((wrapper => {}),
        error => {
          this.errorMessage = 'Something went wrong.'
        })
  }
}
