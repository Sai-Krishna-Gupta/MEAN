import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-page',
    pathMatch: 'full'
  },
  {
    path: 'main-page',
    loadChildren: () => import('./pages/main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: 'listing-page',
    loadChildren: () => import('./pages/listing-page/listing-page.module').then( m => m.ListingPagePageModule)
  },
  {
    path: 'update-page',
    loadChildren: () => import('./pages/update-page/update-page.module').then( m => m.UpdatePagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
