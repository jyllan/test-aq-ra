import cityApp from './reducers';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash.throttle';

const getStore = () => {
    let localStorageState = {};

    try {
        // Try to get the state from the local storage
        const serializedState = localStorage.getItem('state');

        if (serializedState !== null) {
            localStorageState = JSON.parse(serializedState);
        }

    } catch (err) {
        console.log(err);
        // no localstorage
    }

    const store = createStore(
        cityApp,
        localStorageState,
        composeWithDevTools()
    );

    store.subscribe(throttle(() => {
        saveState({
            ...store.getState(),
        });
    }, 100));

    return store;
}

const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch {
      // ignore write errors
    }
};



export default getStore;
