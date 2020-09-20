import { Component, OnInit, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input('card') card: any;

  land_success_object;
  land_success = "NA";

  launch_success_object;
  launch_success = "NA";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.card['rocket']['first_stage']['cores'][0].land_success == true || this.card['rocket']['first_stage']['cores'][0].land_success == false ) {
      this.land_success = this.card['rocket']['first_stage']['cores'][0].land_success
    } else {
      this.land_success = "NA";
    }

    if (this.card.launch_success == true || this.card.launch_success == false) {
      this.launch_success = this.card.launch_success;
    } else {
      this.launch_success = "NA";
    }
  }

  trackByFn(index, item) {
    return item.id;
  }
}
