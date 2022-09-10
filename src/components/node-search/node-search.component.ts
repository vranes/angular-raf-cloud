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

  deletePermission: Boolean
  startPermission: Boolean
  stopPermission: Boolean
  restartPermission: Boolean
  errorMessage: string = ''
  successMessage: string = ''

  nodes: Node[] = []
  endDate: string = ''
  startDate: string = ''
  name: string = ''
  status: string = 'RUNNING,STOPPED'


  constructor(private route:Router, private service: NodeSearchService, private loginService: LoginService) {
    this.getAll()
    this.deletePermission = loginService.getPermissions().includes("can_destroy_nodes")
    this.startPermission = loginService.getPermissions().includes("can_start_nodes")
    this.stopPermission = loginService.getPermissions().includes("can_stop_nodes")
    this.restartPermission = loginService.getPermissions().includes("can_restart_nodes")
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

    this.service.search(
      this.name,
      this.status,
      this.startDate,
      this.endDate,
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

  start(node: Node) {
    this.service.start(node.id).subscribe((response) => {
      this.successMessage = 'Start successful'
      this.errorMessage = ''
    }, error => {
      console.log(error)
      this.errorMessage = 'Something went wrong.'
      this.successMessage = ''
    })
  }

  stop(node: Node) {
    this.service.stop(node.id).subscribe((response) => {
      this.successMessage = 'Stop successful'
      this.errorMessage = ''
    }, error => {
      console.log(error)
      this.errorMessage = 'Something went wrong.'
      this.successMessage = ''
    })
  }

  restart(node: Node) {
    this.service.restart(node.id).subscribe((response) => {
      this.successMessage = 'Restart successful'
      this.errorMessage = ''
    }, error => {
      console.log(error)
      this.errorMessage = 'Something went wrong.'
      this.successMessage = ''
    })
  }


}
