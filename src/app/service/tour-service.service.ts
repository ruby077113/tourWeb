import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { attractions as attractionList } from '../mock-data';
import { Observable, of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})
export class TourServiceService {
    constructor(private http: HttpClient) {}

    getAttractions(page: number) {
        const data = of(attractionList.data);
        const pageOfAtrc = pipe(
            filter((atrc) => atrc)
        );
        const newAtrcs = {
            total: attractionList.total,
            data: pageOfAtrc,
        };
        return of(attractionList);
    }

    // getAttractions() {
    //     let data = this.http.get(this.Url);
    //     console.log('service data', data);
    //     return data;
    // }
}
