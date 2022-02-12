import { Component, OnInit } from '@angular/core';
import {ErrorMessage} from "../../model/model";
import {Router} from "@angular/router";
import {ErrorMessageService} from "../../services/error-message.service";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  errors: ErrorMessage[] = []
  info: string = ''

  constructor(private route:Router, private service: ErrorMessageService) { this.getAll() }

  ngOnInit(): void {
  }

  getAll(){
    this.errors = []
    this.service.getAll().subscribe((response) => {
      this.info = ''
      this.errors = response
    }, error => {
      console.log(error)
      this.info = 'Something went wrong.'
    })
  }
}
