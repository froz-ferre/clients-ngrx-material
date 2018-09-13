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

export const getIds = createSelector(
    getClientState,
    fromClients.getIds
);

export const getClients = createSelector(
    getClientState,
    fromClients.getClients
);

export const getSelected = createSelector(
    getClientState,
    fromClients.getSelected
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
    getIds,
    getClients,
    (ids, clients) => {
        return ids.map(id => clients[id]);
    }
);
