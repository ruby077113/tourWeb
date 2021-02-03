import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { TourServiceService } from '../../service/tour-service.service';

@Component({
    templateUrl: './tour-content.component.html',
    styleUrls: ['./tour-content.component.scss'],
})
export class TourContentComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
        private tourServiceService: TourServiceService
    ) {}
    artcInfo = null;
    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.artcInfo = this.tourServiceService.getAttractionsDetails(id);
        history.replaceState({ page: 'tour' }, '', '/' + id);

        if (!this.artcInfo) {
            this.router.navigateByUrl('/');
        }
    }
}
