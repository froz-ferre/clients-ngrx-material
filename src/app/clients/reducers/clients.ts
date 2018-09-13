import { Action } from '@ngrx/store';
import * as clientAction from '../actions/clients';

import { Client } from '../models/client.model';

const Liana: Client = {
    general: {
        firstName: 'Liana',
        lastName: 'Crooks',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg'
      },
      job: {
        company: 'Ledner, Johnson and Predovic',
        title: 'Investor Functionality Coordinator'
      },
      contact: {
        email: 'Gerry_Hackett77@gmail.com',
        phone: '(895) 984-0132'
      },
      address: {
        street: '1520 Zemlak Cove',
        city: 'New Devon',
        zipCode: '42586-7898',
        country: 'Guinea-Bissau'
      }
};

const Liana2: Client = {
    general: {
        firstName: 'Liana2',
        lastName: 'Crooks',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg'
      },
      job: {
        company: 'Ledner, Johnson and Predovic',
        title: 'Investor Functionality Coordinator'
      },
      contact: {
        email: 'Gerry_Hackett77@gmail.com',
        phone: '(895) 984-0132'
      },
      address: {
        street: '1520 Zemlak Cove',
        city: 'New Devon',
        zipCode: '42586-7898',
        country: 'Guinea-Bissau'
      }
};

export interface State {
    // ids: number[];
    clients: Client[];
    selected: number;
}

const initialState: State = {
    // ids: [0, 1, 2, 3],
    clients: [
        Liana, Liana2
    ],
    selected: null
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
                // ids: clients.length,
                clients: clients
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
