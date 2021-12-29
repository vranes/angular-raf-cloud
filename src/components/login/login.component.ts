import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-api-key-input',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = ''
  password: string = ''
  errorMessage: string = ''

  constructor(private router: Router, private loginService: LoginService,) {
  }

  ngOnInit(): void {

    }

  login(email: string, password: string): void {

    this.loginService.login(email, password).subscribe((wrapper) => {
      this.loginService.setToken(wrapper.jwt)
      this.loginService.setPermissions(wrapper.permissions)
      this.errorMessage = ''
      console.log(wrapper)

      if(wrapper.permissions == '[]')
        this.errorMessage = "You don't have any permissions :("
      else
        this.router.navigate(['/'])
    }, error => {
      this.errorMessage = "Wrong credentials. Login unsuccessful."
    })



  }

}
