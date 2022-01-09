import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  data = [
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
      category: 'won/closed',
      selected: false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  filter(counter: any) {
    this.data.forEach( d => {
      d.selected = d.category === counter.category;
    })
  }

}
