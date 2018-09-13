import { Action } from '@ngrx/store';
import * as clientAction from '../actions/clients';

import { Client } from '../models/client.model';

export interface State {
    // ids: number[];
    clients: Client[];
    selected: number;
    searchQuery: string;
    error: any | null;
}

const initialState: State = {
    // ids: [0, 1, 2, 3],
    clients: [ ],
    selected: null,
    searchQuery: '',
    error: null
};

export function reducer(state = initialState, action: clientAction.Actions ): State {
    switch (action.type) {
        case clientAction.ActionTypes.SELECT: {
            const id = action.payload;
            return {
                ...state,
                selected: id
            };
        }

        case clientAction.ActionTypes.LOAD_CLIENTS: {
            const clients = action.payload;
            return {
                ...state,
                clients: clients
            };
        }

        case clientAction.ActionTypes.LOAD_CLIENTS_FAIL: {
            const error = action.payload;
            return {
                ...state,
                error: error
            };
        }

        case clientAction.ActionTypes.SEARCH: {
            const query = action.payload;
            return {
                ...state,
                searchQuery: query
            };
        }

        default: {
            return state;
        }
    }
}

// export const getIds = (state: State) => state.ids;
export const getClients = (state: State) => state.clients;
export const getSelected = (state: State) => state.selected;
export const getSearchQuery = (state: State) => state.searchQuery;
