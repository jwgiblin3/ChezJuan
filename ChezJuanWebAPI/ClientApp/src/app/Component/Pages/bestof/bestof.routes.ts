import { Routes } from "@angular/router";
import { BestOfComponent } from "./best-of/bestof.component";
import { BestofDetailComponent } from "./bestof-detail/bestof-detail.component";

export const BestOfRoutes: Routes = [
    { path: 'bestof', component: BestOfComponent, data: { image: 'mimi.jpg', section: 'Best of Bergen!' } },
    { path: 'bestofdetail/:id', component: BestofDetailComponent, data: { image: 'mimi.jpg', section: 'Best of Bergen!' } }
  ];