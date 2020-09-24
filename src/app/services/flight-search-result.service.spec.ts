import { TestBed } from '@angular/core/testing';

import { FlightSearchResultService } from './flight-search-result.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('FlightSearchResultService', () => {
  let service: FlightSearchResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers:[FlightSearchResultService]
    });
  });
  
  it('should be created', () => {
    service = TestBed.get(FlightSearchResultService);
    expect(service).toBeTruthy();
  });
});
