import { Component, OnInit } from '@angular/core';
import { LeadModel } from "../../../../shared/models/lead.model";

@Component({
  selector: 'app-employee-table-wrapper',
  templateUrl: './employee-table-wrapper.component.html',
  styleUrls: ['./employee-table-wrapper.component.scss']
})
export class EmployeeTableWrapperComponent implements OnInit {

  dataSet: LeadModel[] = [
    {
      firstName: 'Jonh',
      lastName: 'Doe',
      phone: '+1 (456) 094 8574',
      email: 'john.doe@mail.com',
      status: 'prospecting',
      statusFriendlyName: 'prospecting',
      followUpDate: '13-01-2022',
      pipeline: 13000
    },
    {
      firstName: 'Jonh',
      lastName: 'Doe',
      phone: '+1 (456) 094 8574',
      email: 'john.doe@mail.com',
      status: 'quoting',
      statusFriendlyName: 'quoting',
      followUpDate: '13-01-2022',
      pipeline: 13000
    },
    {
      firstName: 'Jonh',
      lastName: 'Doe',
      phone: '+1 (456) 094 8574',
      email: 'john.doe@mail.com',
      status: 'qualified',
      statusFriendlyName: 'qualified',
      followUpDate: '13-01-2022',
      pipeline: 13000
    },
    {
      firstName: 'Jonh',
      lastName: 'Doe',
      phone: '+1 (456) 094 8574',
      email: 'john.doe@mail.com',
      status: 'prospecting',
      statusFriendlyName: 'prospecting',
      followUpDate: '13-01-2022',
      pipeline: 13000
    },
    {
      firstName: 'Jonh',
      lastName: 'Doe',
      phone: '+1 (456) 094 8574',
      email: 'john.doe@mail.com',
      status: 'won_closed',
      statusFriendlyName: 'won/closed',
      followUpDate: '13-01-2022',
      pipeline: 13000
    }
  ];

  totalPipeline = 0;

  constructor() { }

  ngOnInit(): void {
    this.dataSet.forEach((obj) => {
      this.totalPipeline += obj.pipeline;
    })
  }
}
