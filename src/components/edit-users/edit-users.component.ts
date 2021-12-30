import { Component, OnInit } from '@angular/core';
import {EditUsersService} from "../../services/edit-users.service";
import {User} from "../../model/model";

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  email: string = ''
  name: string = ''
  surname: string = ''
  permissions: string = ''
  errorMessage: string = ''

  constructor(private service: EditUsersService) {
  }

  ngOnInit(): void {
    let user: User = this.service.getUser()
    this.email = user.email
    this.name = user.name
    this.surname = user.surname
    this.permissions = String(user.permissions)
  }

  editUser(email: string, name: string, surname: string, permissions: string): void {
     this.service.editUser(email, name, surname, permissions).subscribe((wrapper => {
       console.log(wrapper)
     }), error => {
       this.errorMessage = 'Something went wrong.'
     })
  }
}
