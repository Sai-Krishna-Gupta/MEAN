import { Component } from '@angular/core';
import { MongoConnectService } from 'src/app/mongo-connect.service';
import  data  from '../../../assets/data/data.json';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage {
  dbName: string = 'Anstronomy';
  collectionName: string = 'fqs';
  buttonState: boolean = false;
  constructor(private service: MongoConnectService) {}
  createDb() {
    this.service.createDb({dataBase: this.dbName, collection: this.collectionName}).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        console.info('Complete');
      },
    });
    this.buttonState = true;
  }
  loadDb(){
    data.data.forEach(element => {
      this.service.loadAll(element).subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (e) => {
          console.error(e);
        },
        complete: () => {
          console.info('Complete');
        },
      });
    });
  }
  eraseDb(){
    this.service.eraseAll().subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        console.info('Complete');
      },
    });;
  }
}
