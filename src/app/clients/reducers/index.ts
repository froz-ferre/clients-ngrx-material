import { ActionReducerMap, createSelector, createFeatureSelector,
    ActionReducer, MetaReducer } from '@ngrx/store';

import * as fromClients from './clients';

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
        return clients.filter(client => client.general.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
);

