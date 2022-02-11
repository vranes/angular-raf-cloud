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
  successMessage: string = ''

  constructor(private router: Router, private loginService: LoginService,) {
  }

  ngOnInit(): void {

    }

  clearInput(){
    this.email = ''
    this.password = ''
    this.errorMessage = ''
  }

  login(email: string, password: string): void {

    this.loginService.login(email, password).subscribe((wrapper) => {
      this.loginService.setToken(wrapper.jwt)
      this.loginService.setPermissions(wrapper.permissions)
      console.log(wrapper)
      this.clearInput()
      this.successMessage = 'Successful login!'

      if(wrapper.permissions == '[]')
        this.errorMessage = "You don't have any permissions :("
      else
        this.router.navigate(['/'])
    }, error => {
      this.successMessage = ''
      this.errorMessage = "Wrong credentials. Login unsuccessful."
    })



  }

}
