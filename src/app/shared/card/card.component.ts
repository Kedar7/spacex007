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
  constructor() { }

  ngOnInit(): void {
  }

    ngOnChanges() {
        this.land_success_object = this.card['rocket']['first_stage']['cores'].length ? this.card['rocket']['first_stage']['cores'][0] : null; 
        this.land_success = this.land_success_object ? this.land_success_object.land_success : "NA";
    }

  trackByFn(index, item) {
    return item.id;
  }
}
