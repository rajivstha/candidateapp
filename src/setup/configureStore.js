import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import thunk from 'redux-thunk';

//redux persist config
const config = {
  key: 'root',
  storage,
  debug: true
};

const reducer = persistCombineReducers(config, reducers);

function configureStore(){
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = [
    thunk
  ];
  const enhancer = composeEnhancers(
    applyMiddleware(
      ...middleware
    ),
  );
  let store = createStore(reducer, enhancer);
  let persistor = persistStore(store);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return { persistor, store }
}
  
export default configureStore;
  