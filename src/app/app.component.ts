import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  clients$: Observable<Client[]>;
  selected$: Observable<Client>;

  constructor(private store: Store<fromStore.State>) {
    this.clients$ = store.select(fromStore.searchClients);
    this.selected$ = store.select(fromStore.getSelectedClient);

    console.log('TODO: set class "active" on selected client (pink border)');
  }

  ngOnInit() {
    this.store.dispatch(new clientAction.LoadClients());
  }

  onSelect(id: number) {
    this.store.dispatch(new clientAction.Select(id));
  }

  onSearch(query: string) {
    this.store.dispatch(new clientAction.Search(query));
  }
}
