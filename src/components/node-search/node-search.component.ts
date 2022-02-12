import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NodeSearchService} from "../../services/nodes/node-search.service";
import {Node, User} from "../../model/model";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-node-search',
  templateUrl: './node-search.component.html',
  styleUrls: ['./node-search.component.css']
})
export class NodeSearchComponent implements OnInit {

  deletePermission: Boolean = false
  errorMessage: string = ''
  successMessage: string = ''

  nodes: Node[] = []
  endDate: Date | undefined
  startDate: Date | undefined
  name: string = ''
  status: string = 'RUNNING,STOPPED'


  constructor(private route:Router, private service: NodeSearchService, private loginService: LoginService) {
    this.getAll()
    this.deletePermission = loginService.getPermissions().includes("can_destroy_nodes")
  }

  ngOnInit(): void {
  }

  getAll() {
    this.nodes = []
    this.successMessage = ''
    this.service.getAll().subscribe((response) => {
      this.successMessage = ''
      this.nodes = response
    }, error => {
      console.log(error)
      this.errorMessage = 'Something went wrong.'
    })
  }

  search(){

    this.successMessage = ''
    //let startDateStr = this.startDate?.toDateString()
    let startDateStr = null
    if (startDateStr == null) startDateStr = ''
    //let endDateStr = this.endDate?.toDateString()
    let endDateStr = null
    if (endDateStr == null) endDateStr = ''

    this.service.search(
      this.name,
      this.status,
      startDateStr,
      endDateStr,
    ).subscribe((response) => {
      this.errorMessage = ''
      this.nodes = response
    }, error => {
      this.errorMessage = 'Something went wrong.'
    })
  }

  delete(node: Node){
    this.service.delete(node.id).subscribe((wrapper => {
        this.route.navigate(['/nodes'])
        this.successMessage = 'Deletion successful!'
        this.errorMessage = ''
      }),
      error => {
        this.successMessage = ''
        this.errorMessage = 'Deletion unsuccessful. Something went wrong.'
      })
  }

}
