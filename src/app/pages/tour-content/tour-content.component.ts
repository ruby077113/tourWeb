import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { attractions as attractionList } from '../../mock-data';
import { attraction } from '../../interface/attraction';

@Component({
    templateUrl: './tour-content.component.html',
    styleUrls: ['./tour-content.component.scss'],
})
export class TourContentComponent implements OnInit {
    constructor(private route: ActivatedRoute, private location: Location) {}
    artcInfo;
    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.artcInfo = attractionList.data.find((info) => info.id === id);
        console.log(this.artcInfo);
        console.log(attractionList.data);
    }
}
