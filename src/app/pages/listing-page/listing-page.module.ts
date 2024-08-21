import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingPagePageRoutingModule } from './listing-page-routing.module';

import { ListingPagePage } from './listing-page.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingPagePageRoutingModule
  ],
  declarations: [ListingPagePage]
})
export class ListingPagePageModule {}
