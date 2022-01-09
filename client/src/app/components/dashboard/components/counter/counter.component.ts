import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnChanges {
  @Input() count : number = 0;
  @Input() category : string = '';
  @Input() selected : boolean = false;

  image = '';

  constructor() { }

  ngOnInit() {
    this.stylize();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      this.stylize();
    }
  }

  stylize() {
    switch (this.category) {
      case 'prospecting': this.image = 'assets/prospecting';
        break;
      case 'qualified' : this.image = 'assets/mining-pick';
        break;
      case 'quoting': this.image = 'assets/pricetag';
        break;
      case 'won/closed' : this.image = 'assets/handshake';
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
