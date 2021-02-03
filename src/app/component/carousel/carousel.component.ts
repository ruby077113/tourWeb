import { Component, OnInit, Input, AfterViewInit, AfterViewChecked } from '@angular/core';
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
    @Input() link: boolean;
    @Input() data;
    // faChevronRight = faChevronRight;
    // faChevronLeft = faChevronLeft;
    index = 0;
    li_height = 540;
    width = 1080;
    count: number;
    maxLength: number;
    sliderUlWidth: number;
    position_left = 0;
    sliders;
    carousel;
    constructor(private tourServiceService: TourServiceService) {}
    ngOnInit(): void {
        console.log('slider', this.length);
        if (this.data) {
            this.maxLength = this.data.length;
            this.sliders = this.data;
        } else {
            this.maxLength = this.length;
            this.sliders = this.tourServiceService.getCarouselData(this.maxLength);
        }
        this.sliderUlWidth = this.maxLength * this.width;
    }
    ngAfterViewInit() {
        this.carousel = this.slider.nativeElement;
    }
    ngAfterViewChecked() {
        this.li_height = this.carousel.offsetWidth / 2 > 540 ? 540 : this.carousel.offsetWidth / 2;
    }

    @HostListener('window:resize', ['$event'])
    windowResize($event): void {
        this.width = this.carousel.offsetWidth;
        this.carousel.style.height = this.width / 2 > 540 ? '540px' : this.width / 2;
        this.li_height = this.width / 2;
        this.position_left = -this.width * this.index;
    }
    clickHandler(shift) {
        if (shift < 0) {
            this.index = 0;
            return;
        }
        if (shift >= this.maxLength) {
            return;
        }
        this.index = shift;
        this.position_left = -this.width * this.index;
        console.log(2, this.position_left, shift, this.index, this.length);
    }
}
