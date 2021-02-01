import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { attraction_page } from '../mock-data';
import { attraction } from './../interface/attraction';

import { Observable, of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class TourServiceService {
    constructor(private http: HttpClient) {}
    nowPage = 1;

    getAttractions(page: number) {
        this.nowPage = page;
        return of(attraction_page(page));
    }
    getAttractionsDetails(id: number) {
        return attraction_page(this.nowPage)['data'].find((atrc) => atrc.id === id) || '';
    }
    getCarouselData(count: number) {
        // const array = new Set(nums)
        let arr = [];
        let atrcs = attraction_page(this.nowPage)['data'];
        for (let i = 0; i < count; i++) {
            const index = this.getRandom(count);
            const atrc = atrcs[index];
            const newData = {
                id: atrc.id,
                name: atrc.name,
                image: atrc.images[0],
                distric: atrc.distric,
            };
            arr.push(newData);
        }
        return arr;
    }
    getPages() {
        console.log('attraction_page()', attraction_page(0));
    }

    getRandom(x) {
        return Math.floor(Math.random() * x);
    }

    // getAttractions() {
    //     let data = this.http.get(this.Url);
    //     console.log('service data', data);
    //     return data;
    // }
}
