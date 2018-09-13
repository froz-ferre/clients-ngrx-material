import { Action } from '@ngrx/store';
import { Client } from '../models/client.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ActionTypes {
    SELECT = '[Client] SELECT',
    LOAD_CLIENTS = '[Client] Load clients',
    LOAD_CLIENTS_FAIL = '[Client] Load failed :C',
    SEARCH = '[Client] Search'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class Select implements Action {
    readonly type = ActionTypes.SELECT;

    constructor(public payload: number) { }
}

export class LoadClients implements Action {
    readonly type = ActionTypes.LOAD_CLIENTS;

    constructor(public payload: Client[]) {}
}

export class LoadClientsFail implements Action {
    readonly type = ActionTypes.LOAD_CLIENTS_FAIL;

    constructor(public payload: any) {}
}

export class Search implements Action {
    readonly type = ActionTypes.SEARCH;

    constructor(public payload: string) {}
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =   Select         |
                        LoadClients    |
                        LoadClientsFail|
                        Search;
