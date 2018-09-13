import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Client } from './clients/models/client.model';
import { Store } from '@ngrx/store';

import * as fromStore from './clients/reducers';
import * as clientAction from './clients/actions/clients';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clients$: Observable<Client[]>;
  selected$: Observable<Client>;

  constructor(private store: Store<fromStore.State>) {
    this.clients$ = store.select(fromStore.getAllClients);
    this.selected$ = store.select(fromStore.getSelectedClient);

    console.log('TODO: set class "active" on selected client (pink border)');
    console.log('TODO: при поиске отображаются неправильные данные');
    /* Потому что в стейте обновляется только поле query, clients
      же остается прежним.
      Еще нужно разобраться с эффектами.
    */
  }

  onSelect(id: number) {
    this.store.dispatch(new clientAction.Select(id));
  }

  onSearch(query: string) {
    this.store.dispatch(new clientAction.Search(query));
    this.clients$ = this.store.select(fromStore.searchClients);
  }
}
