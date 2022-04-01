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
      _id: 'abc',
      firstName: "John",
      lastName: "Doe",
      email: 'john.doe@gmail.com',
      isAdmin: true,
      pipeline: 0,
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
            dealStage: 'prospecting',
            followUpDate: '13-01-2022',
            pipeline: 13000,
            notes: 'abc'
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
            dealStage: 'quoting',
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
            dealStage: 'qualified',
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
            dealStage: 'prospecting',
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
            dealStage: 'won_closed',
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
      employee.pipeline = employee.leads.map((lead) => lead.deal.pipeline).reduce((pipeline, acc) => acc += pipeline);
    })
  }
}
