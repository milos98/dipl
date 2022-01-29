import { Component, OnInit } from '@angular/core';
import { CounterModel } from "../../../../shared/models/counter.model";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  selectedCategory = '';
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
  ]
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
