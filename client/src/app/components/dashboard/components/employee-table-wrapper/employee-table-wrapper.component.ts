import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-table-wrapper',
  templateUrl: './employee-table-wrapper.component.html',
  styleUrls: ['./employee-table-wrapper.component.scss']
})
export class EmployeeTableWrapperComponent implements OnInit {

  dataSet = [
    {
      firstName: 'Jonh',
      lastName: 'Doe',
      phone: '+1 (456) 094 8574',
      email: 'john.doe@mail.com',
      status: 'prospecting',
      followUpDate: '13-01-2022',
      pipeline: 13000
    },
    {
      firstName: 'Jonh',
      lastName: 'Doe',
      phone: '+1 (456) 094 8574',
      email: 'john.doe@mail.com',
      status: 'quoting',
      followUpDate: '13-01-2022',
      pipeline: 13000
    },
    {
      firstName: 'Jonh',
      lastName: 'Doe',
      phone: '+1 (456) 094 8574',
      email: 'john.doe@mail.com',
      status: 'qualified',
      followUpDate: '13-01-2022',
      pipeline: 13000
    },
    {
      firstName: 'Jonh',
      lastName: 'Doe',
      phone: '+1 (456) 094 8574',
      email: 'john.doe@mail.com',
      status: 'prospecting',
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
