import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { TourContentComponent } from './pages/tour-content/tour-content.component';

const routes: Routes = [
    { path: '', component: ListPageComponent, pathMatch: 'full' },
    { path: 'tour/:id', component: TourContentComponent },
    { path: '**', component: ListPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
