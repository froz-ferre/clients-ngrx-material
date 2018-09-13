import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('../../../assets/db/clients.json')
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
