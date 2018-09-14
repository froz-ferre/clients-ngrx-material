import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromClients from './clients';
import { Client } from '../models/client.model';

export interface State {
    clients: fromClients.State;
}

export const reducers: ActionReducerMap<State> = {
    clients: fromClients.reducer
};

export const getClientState = createFeatureSelector<fromClients.State>('clients');

// export const getIds = createSelector(
//     getClientState,
//     fromClients.getIds
// );

export const getClients = createSelector(
    getClientState,
    fromClients.getClients
);

export const getSelected = createSelector(
    getClientState,
    fromClients.getSelected
);

export const getSearchQuery = createSelector(
    getClientState,
    fromClients.getSearchQuery
);

export const getSelectedClient = createSelector(
    getSelected,
    getClients,
    (selectedId, clients) => {
      return {
        ...clients[selectedId]
      };
    }
);

export const getAllClients = createSelector(
    // getIds,
    // getClients,
    // (ids, clients) => {
    //     return ids.map(id => clients[id]);
    // }
    getClients,
    (clients) => {
        return [...clients];
    }
);

export const searchClients = createSelector(
    getClients,
    getSearchQuery,
    (clients, query) => {
        return clients.filter(client => isMatch(client, query));
    }
);

function isMatch(client: Client, query: string): boolean {
    // client.general.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    for (let key in client) {
        if (key === 'id') { continue; }
        if (typeof(client[key]) === 'object') {
            for (let i in client[key]) {
                if (client[key][i].toString().toLowerCase().indexOf(query.toLowerCase()) !== -1) { return true; }
            }
        }
    }
    return false;
}

