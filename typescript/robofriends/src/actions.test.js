import * as actions from './actions';

import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
const mockStore = configureMockStore([thunkMiddleware]);

describe('actions', () => {

    it('should create an action to search robots', () => {
        const text = 'wooo'
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }
    
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    })
    
    it('handles requesting robots api', () => {
        const store = mockStore();
        const action = store.getActions()
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        }
        store.dispatch(actions.requestRobots())
    
        expect(action[0]).toEqual(expectedAction);
    })
})


