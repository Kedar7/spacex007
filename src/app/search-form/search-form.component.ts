import { Component, OnInit } from '@angular/core';
import { FlightSearchResultService } from '../services/flight-search-result.service'
import { Filters } from '../../app/shared/filters/filters';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  filter = Filters;
  selected_launch_year;
  selected_successful_launch;
  selected_successful_landing;
  land_success
  constructor(public flightService: FlightSearchResultService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    let params = "";
    this.flightService.setLaunchData(params).subscribe((data) => {
      this.flightService.sendData(data);
    })
  }

  trackByFn(index, item) {
    return item.id;
  }
  filterData(type, value, index) {
    switch (type) {
      case "launch_year":
        this.selected_launch_year = value;
        localStorage.setItem("launch_year", value);
        break;
      case "successful_launch":
        this.selected_successful_launch = value;

        localStorage.setItem("success_launch", value);
        break;
      case "successful_landing":
        this.selected_successful_landing = value;
        localStorage.setItem("success_land", value);
      default:
      // code block
    }

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        'launch_year': localStorage.getItem("launch_year") || "",
        'launch_success': localStorage.getItem("success_launch") || "",
        'land_success': localStorage.getItem("success_land") || ""
      },
      queryParamsHandling: 'merge'
    });

    let params = {};
    let paramString = "";
    if (type == "launch_year" && value == "") {
      paramString += "&launch_year=" + value;
    }
    if (type == "successful_launch" && value) {
      paramString += "&launch_success=" + value
    }
    if (type == "successful_landing" && value) {
      paramString += "&land_success=" + value
    }
    params["param_data"] = paramString;


    this.flightService.setLaunchData(params).subscribe((data) => {
      this.flightService.sendData(data);
    })

  }


}
