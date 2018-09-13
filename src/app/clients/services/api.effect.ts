import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Actions, Effect } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as clientActions from '../actions/clients';

@Injectable()
export class ApiEffects {

    constructor(private apiService: ApiService,
                private action$: Actions) { }

    @Effect()
    loadClients$ = this.action$.ofType('@ngrx/effects/init').pipe(
        switchMap(() => {
      return this.apiService
        .getClients()
        .pipe(
          map(clients => new clientActions.LoadClients(clients)),
          catchError(error => of(new clientActions.LoadClientsFail(error)))
        );
    })
  );
}
