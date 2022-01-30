import { Component, OnInit } from '@angular/core';
import { CounterModel } from "../../../../shared/models/counter.model";
import { LeadModel } from "../../../../shared/models/lead.model";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  modalShow = true;
  selectedCategory = '';
  selectedLead: LeadModel;

  data: CounterModel[] = [
    {
      count: 69,
      category: 'prospecting',
      selected: false
    },
    {
      count: 73,
      category: 'qualified',
      selected: false
    },
    {
      count: 95,
      category: 'quoting',
      selected: false
    },
    {
      count: 28,
      category: 'won_closed',
      categoryFriendlyName: 'won/closed',
      selected: false
    }
  ];
  dataSet: LeadModel[] = [
    {
      firstName: 'Jonh',
      lastName: 'Doe',
      phone: '+1 (456) 094 8574',
      email: 'john.doe@mail.com',
      status: 'prospecting',
      statusFriendlyName: 'prospecting',
      followUpDate: '2022-01-13',
      pipeline: 13000,
      contactMethod: 'email',
      title: 'abc',
      company: 'abcdeg',
      website: 'web',
      address: 'adr',
      floor: 8,
      city: 'beg',
      zip: 11000,
      notes: 'smth'
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

  constructor() { }

  ngOnInit(): void {
  }

  toggleCategoryFilter(counter: any) {

    if(this.selectedCategory === '' || this.selectedCategory !== counter.category) {
      this.selectedCategory = counter.category;
    } else {
      this.selectedCategory = '';
    }

    this.data.forEach( d => {
      d.selected = d.category === this.selectedCategory;
    })
  }
}
