import { createStore } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import saveBuying from './../reducers/reducers_for_tests/emptyCartReducer';

const rootPersistConfig = {
    key: 'root',
    storage: storage
}

export default createStore(persistCombineReducers(rootPersistConfig, { saveBuying }));