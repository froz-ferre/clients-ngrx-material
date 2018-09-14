import { TestBed, inject, fakeAsync, flush } from '@angular/core/testing';

import { ClientService } from './client.service';

import { take } from 'rxjs/operators';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientService]
    });
  });

  it('should be created', inject([ClientService], (service: ClientService) => {
    expect(service).toBeTruthy();
  }));

  it(
    'should return array of clients async',
    fakeAsync(inject([ClientService, HttpTestingController], (service: ClientService, backend: HttpTestingController) => {
      // нужно вспомнить, как работают шпионы.
      const mockUsers = [];

      service.getClients().subscribe(users => {
        expect(users).toEqual(mockUsers);
      });

      backend.expectOne({
        method: 'GET'
      }).flush(mockUsers);
    }))
  );
});
