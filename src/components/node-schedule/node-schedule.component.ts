import { Component, OnInit } from '@angular/core';
import {NodeScheduleService} from "../../services/nodes/node-schedule.service";

@Component({
  selector: 'app-node-schedule',
  templateUrl: './node-schedule.component.html',
  styleUrls: ['./node-schedule.component.css']
})
export class NodeScheduleComponent implements OnInit {
  id: string = ''
  date: string = ''
  operation: string = ''
  errorMessage: string = ''
  successMessage: string = ''

  constructor(private service: NodeScheduleService) {}

  ngOnInit(): void {
  }

  schedule() {
    this.service.schedule(this.id, this.date, this.operation).subscribe((response) => {
      this.errorMessage = ''
      this.successMessage = 'Scheduling successful.'
    }, error => {
      this.successMessage = ''
      this.errorMessage = 'Something went wrong.'
    })
  }
}
