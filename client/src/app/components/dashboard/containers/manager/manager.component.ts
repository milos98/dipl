import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CounterModel } from "../../../../shared/models/counter.model";
import { LeadsService } from "../../../../shared/leads/leads.service";
import { EmployeeModel } from "../../../../shared/models/employee.model";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  modalShow = false;
  selectedCategory = '';

  data: EmployeeModel[];
  counterData: CounterModel[];

  constructor(
      private leadsService: LeadsService,
      private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes) {
      this.leadsService.resetSelectedlead();
      this.fetchData();
    }
  }

  fetchData() {
    this.counterReset();
    this.leadsService.getAll().subscribe((res) => {
      this.data = res;
      this.data.forEach((employee) => {
        let totalPipeline = 0;
        employee.leads.forEach((lead) => {
          this.counterData.forEach((counter) => {
            if (counter.category === lead.deal.dealStage) {
              counter.count += 1;
            }
          });
          totalPipeline += +lead.deal.pipeline;
          lead.deal.followUpDate = this.datePipe.transform(lead.deal.followUpDate, 'yyyy-MM-dd');
        });
        employee.pipeline = totalPipeline;
      });
    });
  }

  toggleCategoryFilter(counter: CounterModel) {
    if(this.selectedCategory === '' || this.selectedCategory !== counter.category) {
      this.selectedCategory = counter.category;
    } else {
      this.selectedCategory = '';
    }

    this.counterData.forEach( d => {
      d.selected = d.category === this.selectedCategory;
    })
  }

  selectLead(): void {
    this.modalShow = true;
  }

  updateLead() {
    this.leadsService.update().subscribe(
        () => {
          console.log('hdtgfjhkjk');
          this.closeModal();
        }
    );
  }

  closeModal() {
    this.modalShow = !this.modalShow;
    this.leadsService.resetSelectedlead();
    this.fetchData();
  }

  counterReset() {
    this.counterData = [
      {
        count: 0,
        category: 'prospecting',
        selected: false
      },
      {
        count: 0,
        category: 'qualified',
        selected: false
      },
      {
        count: 0,
        category: 'quoting',
        selected: false
      },
      {
        count: 0,
        category: 'won_closed',
        selected: false
      }
    ];
  }
}
