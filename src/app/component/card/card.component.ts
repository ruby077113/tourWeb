import { Component, OnInit, Input } from '@angular/core';
import { attraction } from '../../interface/attraction';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() info: attraction;
    @Input() type: boolean;
    // faTag = faTag;
    tags;
    constructor() {}

    ngOnInit(): void {
        console.log("type",this.type);
        this.tags = this.info.target.length !== 0 ? this.info.target : this.info.category;
    }
}
