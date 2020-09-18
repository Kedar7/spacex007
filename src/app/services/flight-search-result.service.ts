import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, forkJoin } from 'rxjs';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class FlightSearchResultService {
    launchUrl = environment.launchUrl;
    launchUpdate = new Subject<any[]>();
    private subject = new Subject<any>();
    public queryParams;

    constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }
    setLaunchData(params) {
        this.route.queryParams.subscribe(params => {
             this.queryParams = params;
            console.log(params)
            console.log(this.queryParams);

        });

        return this.httpClient.get(this.launchUrl + params.param_data)

    }
    sendData(data) {
        this.subject.next(data);
        this.getLaunchData()
    }

    getLaunchData(): Observable<any> {
        return this.subject.asObservable();
    }
}
