import { CarouselComponent } from './../../component/carousel/carousel.component';
import { Component, OnInit } from '@angular/core';
import { TourServiceService } from '../../service/tour-service.service';

import { attraction } from '../../interface/attraction';

@Component({
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
    attractionCount: number;
    attractionList;
    constructor(private TourServiceService: TourServiceService) {}

    ngOnInit(): void {
        this.TourServiceService.getAttractions(1).subscribe((attractions) => {
            this.attractionList = attractions['data'];
            this.attractionCount = attractions['total'];
        });
    }

}
