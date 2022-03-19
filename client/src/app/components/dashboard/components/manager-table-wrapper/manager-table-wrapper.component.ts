import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from "../../../../shared/models/employee.model";

@Component({
  selector: 'app-manager-table-wrapper',
  templateUrl: './manager-table-wrapper.component.html',
  styleUrls: ['./manager-table-wrapper.component.scss']
})
export class ManagerTableWrapperComponent implements OnInit {

  dataSet: EmployeeModel[] = [
    {
      info: {
        name: "John",
        surname: "Doe",
        pipeline: 0
      },
      leads: [
        {
          contact: {
            firstName: 'Jonh',
            lastName: 'Doe',
            phone: '+1 (456) 094 8574',
            email: 'john.doe@mail.com',
          },
          company: {
          },
          deal: {
            status: 'prospecting',
            statusFriendlyName: 'prospecting',
            followUpDate: '13-01-2022',
            pipeline: 13000
          }
        },
        {
          contact: {
            firstName: 'Jonh',
            lastName: 'Doe',
            phone: '+1 (456) 094 8574',
            email: 'john.doe@mail.com',
          },
          company: {
          },
          deal: {
            status: 'quoting',
            statusFriendlyName: 'quoting',
            followUpDate: '13-01-2022',
            pipeline: 13000
          }
        },
        {
          contact: {
            firstName: 'Jonh',
            lastName: 'Doe',
            phone: '+1 (456) 094 8574',
            email: 'john.doe@mail.com',
          },
          company: {
          },
          deal: {
            status: 'qualified',
            statusFriendlyName: 'qualified',
            followUpDate: '13-01-2022',
            pipeline: 13000
          }
        },
        {
          contact: {
            firstName: 'Jonh',
            lastName: 'Doe',
            phone: '+1 (456) 094 8574',
            email: 'john.doe@mail.com',
          },
          company: {
          },
          deal: {
            status: 'prospecting',
            statusFriendlyName: 'prospecting',
            followUpDate: '13-01-2022',
            pipeline: 13000
          }
        },
        {
          contact: {
            firstName: 'Jonh',
            lastName: 'Doe',
            phone: '+1 (456) 094 8574',
            email: 'john.doe@mail.com',
          },
          company: {
          },
          deal: {
            status: 'won_closed',
            statusFriendlyName: 'won/closed',
            followUpDate: '13-01-2022',
            pipeline: 13000
          }
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSet.forEach((employee) => {
      employee.info.pipeline = employee.leads.map((lead) => lead.deal.pipeline).reduce((pipeline, acc) => acc += pipeline)
    })
  }
}
