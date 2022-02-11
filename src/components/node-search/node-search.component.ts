import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NodeSearchService} from "../../services/node-search.service";
import {Node, User} from "../../model/model";

@Component({
  selector: 'app-node-search',
  templateUrl: './node-search.component.html',
  styleUrls: ['./node-search.component.css']
})
export class NodeSearchComponent implements OnInit {

  nodes: Node[] = []
  errorMessage: string = ''

  endDate: Date | undefined
  startDate: Date | undefined
  name: string = ''
  status: string = 'RUNNING,STOPPED'


  constructor(private route:Router, private service: NodeSearchService) { this.getAll() }

  ngOnInit(): void {
  }

  getAll() {
    this.nodes = []
    this.service.getAll().subscribe((response) => {
      this.errorMessage = ''
      this.nodes = response
    }, error => {
      this.errorMessage = 'Something went wrong.'
    })
  }

  search(){
    let startDateStr = this.startDate?.toDateString()
    if (startDateStr == null) startDateStr = ''
    let endDateStr = this.endDate?.toDateString()
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

}
