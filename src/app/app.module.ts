import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


// ----------- AppComponent -----------
import { AppComponent } from './app.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { TourContentComponent } from './pages/tour-content/tour-content.component';
import { CardComponent } from './component/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndexNavComponent } from './component/index-nav/index-nav.component';
import { CarouselComponent } from './component/carousel/carousel.component';

@NgModule({
    declarations: [
        AppComponent,
        ListPageComponent,
        TourContentComponent,
        CardComponent,
        IndexNavComponent,
        CarouselComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, HttpClientModule],  
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
