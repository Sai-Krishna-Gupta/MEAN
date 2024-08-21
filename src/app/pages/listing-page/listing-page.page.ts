import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MongoConnectService } from 'src/app/mongo-connect.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.page.html',
  styleUrls: ['./listing-page.page.scss'],
})
export class ListingPagePage implements OnInit {
  dbData: any;
  constructor(private service: MongoConnectService, private router: Router) { }
  ionViewDidEnter(){
    this.ngOnInit();
  }
  ngOnInit()
  {
    this.service.findAll().subscribe({
      next: (data: any) => {
        this.dbData = data;
      },
      error: (e)=>{console.error(e);},
      complete: ()=>{console.info("Complete")}
    })
  }
}
