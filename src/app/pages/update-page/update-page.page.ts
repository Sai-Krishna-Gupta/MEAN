import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MongoConnectService } from 'src/app/mongo-connect.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.page.html',
  styleUrls: ['./update-page.page.scss'],
})
export class UpdatePagePage implements OnInit {
  dataReceived: any;
  fullData: any = { Question: '', Answer: '' };
  buttonDisabled: boolean = false;
  constructor(
    private service: MongoConnectService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataReceived = this.activeRoute.snapshot.params['id'];
    if(this.dataReceived==-1){
      this.buttonDisabled = true;
      return;
    }
    this.service.find({ _id: this.dataReceived }).subscribe({
      next: (data: any) => {
        this.fullData.Question = '' + data.Question;
        this.fullData.Answer = '' + data.Answer;
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        console.info('Complete');
      },
    });
  }
  insert() {
    this.service.loadAll(this.fullData).subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['/listing-page'])
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        console.info('Complete');
      },
    });
  }
  update() {
    let data = {
      condition: { _id: this.dataReceived },
      update: {
        $set: {
          Question: this.fullData.Question,
          Answer: this.fullData.Answer,
        },
      },
    };
    this.service.updateOne(data).subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['/listing-page'])
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        console.info('Complete');
      },
    });
  }
  delete() {
    this.service.deleteOne({ _id: this.dataReceived }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['/listing-page'])
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        console.info('Complete');
      },
    });
  }
}
