import { Injectable } from '@angular/core';
import { ClientService } from './client.service';
import { Actions, Effect } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as clientActions from '../actions/clients';

@Injectable()
export class ClientEffects {

    constructor(private clientService: ClientService,
                private action$: Actions) { }

    @Effect()
    loadClients$ = this.action$.ofType(clientActions.ActionTypes.LOAD_CLIENTS).pipe(
        switchMap(() => {
      return this.clientService
        .getClients()
        .pipe(
          map(clients => new clientActions.LoadClientsSuccess(clients)),
          catchError(error => of(new clientActions.LoadClientsFail(error)))
        );
    })
  );

}
