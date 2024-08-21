import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MongoConnectService {
  constructor(private Http: HttpClient) {}
  createDb(data: any) {
    return this.Http.post('http://localhost:3000/createDb', data);
  }
  loadAll(data: any) {
    return this.Http.post('http://localhost:3000/insert', data);
  }
  eraseAll() {
    return this.Http.get('http://localhost:3000/deleteAll');
  }
  findAll() {
    return this.Http.get('http://localhost:3000/findAll');
  }
  find(data: any) {
    return this.Http.post('http://localhost:3000/find', data);
  }
  deleteOne(data: any){
    return this.Http.post('http://localhost:3000/deleteOne', data);
  }
  updateOne(data: any){
    return this.Http.post('http://localhost:3000/update',data);
  }
}
