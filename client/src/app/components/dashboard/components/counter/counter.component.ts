import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CategoryConstants } from "../../../../shared/constants/categories";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnChanges {
  @Input() count: any;
  @Input() category: any;
  @Input() selected: any;

  image = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      this.stylize();
    }
  }

  stylize() {
    switch (this.category) {
      case CategoryConstants.prospecting: this.image = 'assets/prospecting';
        break;
      case CategoryConstants.qualified : this.image = 'assets/mining-pick';
        break;
      case CategoryConstants.quoting: this.image = 'assets/pricetag';
        break;
      case CategoryConstants.won_closed : this.image = 'assets/handshake';
        break;
      default : this.image = '';
    }
    if(this.selected) {
      this.image = this.image + '-white.png';
    } else {
      this.image = this.image + '-red.png';
    }
  }

}
