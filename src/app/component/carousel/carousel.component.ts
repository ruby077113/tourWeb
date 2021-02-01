import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
// import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { HostListener } from '@angular/core';

import { TourServiceService } from '../../service/tour-service.service';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
    @ViewChild('carouselSlider') slider: ElementRef;
    @Input() length: number;
    // faChevronRight = faChevronRight;
    // faChevronLeft = faChevronLeft;
    index = 0;
    height = 540;
    count: number;
    maxLength: number;
    sliderUlWidth: number;
    position_left = 0;
    sliders;
    carousel;
    constructor(private tourServiceService: TourServiceService) {}
    ngOnInit(): void {
        console.log('slider', this.length);
        this.maxLength = this.length;
        this.sliderUlWidth = this.maxLength * 1080;
        this.sliders = this.tourServiceService.getCarouselData(this.maxLength);
        console.log('this', this.sliders);
    }
    ngAfterViewInit() {
        this.carousel = this.slider.nativeElement;
        console.log('video', this.carousel.offsetWidth);
    }

    @HostListener('window:resize', ['$event'])
    windowResize($event): void {
        const width = $event.target.innerWidth;
        this.carousel.innerHeight = width / 2;
        console.log('resize', $event.target);
    }
    clickHandler(shift) {
        console.log(this.position_left, shift, this.index, this.length);

        if (shift < 0) {
            this.index = 0;
            return;
        }
        if (shift >= this.maxLength) {
            return;
        }
        this.index = shift;
        this.position_left = -1080 * this.index;
        console.log(2, this.position_left, shift, this.index, this.length);
    }
}
