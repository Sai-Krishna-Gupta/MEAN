import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Main', url: '/main-page', icon: 'planet' },
    { title: 'Listing', url: '/listing-page', icon: 'paper-plane' },
    { title: 'Update', url: '/update-page', icon: 'clipboard' }
  ];
  constructor() {}
}
