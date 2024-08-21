import { TestBed } from '@angular/core/testing';

import { MongoConnectService } from './mongo-connect.service';

describe('MongoConnectService', () => {
  let service: MongoConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MongoConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
