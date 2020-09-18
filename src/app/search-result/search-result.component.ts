import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {FlightSearchResultService} from '../services/flight-search-result.service'

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
    launchList: any[] = [];

    constructor(public flightService: FlightSearchResultService, public cdr: ChangeDetectorRef) { }

    ngOnInit(): void {
           this.flightService.getLaunchData().subscribe
            ((flights) => {
                this.launchList = flights;
                this.cdr.detectChanges()
            })
    }
    trackByFn(index, item) {    
        return item.id; 
     }
}
