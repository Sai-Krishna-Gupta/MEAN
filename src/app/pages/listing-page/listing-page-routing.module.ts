import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingPagePage } from './listing-page.page';

const routes: Routes = [
  {
    path: '',
    component: ListingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingPagePageRoutingModule {}
