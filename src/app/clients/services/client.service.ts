import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('../../../assets/db/clients.json')
      .pipe(
        map((clients: Client[]) => {
          clients = clients.map((client, index) => {
            return <Client>{id: index, ...client};
          });
          return clients;
        }),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
