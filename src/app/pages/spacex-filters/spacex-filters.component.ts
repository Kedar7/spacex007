import { Component, OnInit } from '@angular/core';
import { FlightSearchResultService } from '../../services/flight-search-result.service';
import { Filters } from '../../../app/shared/filters/filters';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spacex-filters',
  templateUrl: './spacex-filters.component.html',
  styleUrls: ['./spacex-filters.component.scss']
})
export class SpacexFiltersComponent implements OnInit {
  filter = Filters;
  selectedLaunchYear: any;
  selectedSuccessfulLaunch: any;
  selectedSuccessfulLanding: any;
  constructor(public flightService: FlightSearchResultService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  trackByFn(index, item) {
    return item.id;
  }

  filterData(type, value, index) {
    switch (type) {
      case 'launch_year':
        if (this.selectedLaunchYear === value) {
          this.selectedLaunchYear = null;
        } else {
          this.selectedLaunchYear = value;
        }
        break;
      case 'successful_launch':
        if (this.selectedSuccessfulLaunch === value) {
          this.selectedSuccessfulLaunch = null;
        } else {
          this.selectedSuccessfulLaunch = value;
        }
        break;
      case 'successful_landing':
        if (this.selectedSuccessfulLanding === value) {
          this.selectedSuccessfulLanding = null;
        } else {
          this.selectedSuccessfulLanding = value;
        }
      // code block
    }

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        launch_year: this.selectedLaunchYear,
        launch_success: this.selectedSuccessfulLaunch,
        land_success: this.selectedSuccessfulLanding
      },
      queryParamsHandling: 'merge'
    });
  }
}
