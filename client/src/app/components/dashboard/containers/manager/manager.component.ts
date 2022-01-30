import { Component, OnInit } from '@angular/core';
import { CounterModel } from "../../../../shared/models/counter.model";
import { LeadModel } from "../../../../shared/models/lead.model";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

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
  ]
  constructor() {

  }

  ngOnInit(): void {
  }

  toggleCategoryFilter(counter: CounterModel) {
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
