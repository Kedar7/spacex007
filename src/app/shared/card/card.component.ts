import { Component, OnInit, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  // tslint:disable-next-line: no-input-rename
  @Input('card') card: any;

  landSuccess: any = 'NA';
  launchSuccess = 'NA';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    // tslint:disable-next-line: max-line-length
    if (this.card.rocket.first_stage.cores[0].land_success === true || this.card.rocket.first_stage.cores[0].land_success === false) {
      this.landSuccess = this.card.rocket.first_stage.cores[0].land_success;
    } else {
      this.landSuccess = 'NA';
    }

    if (this.card.launch_success === true || this.card.launch_success === false) {
      this.launchSuccess = this.card.launch_success;
    } else {
      this.launchSuccess = 'NA';
    }
  }

  trackByFn(index, item) {
    return item.id;
  }
}
