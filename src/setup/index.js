import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import apolloClient from './apolloClient';
import configureStore from './configureStore';
import App from '../App';

export const { persistor, store } = configureStore();

class Setup extends Component {
    constructor(props) {
      super(props);
      //  Intercept react-native error handling
      if (ErrorUtils._globalHandler) {
        this.defaultHandler = ErrorUtils.getGlobalHandler && ErrorUtils.getGlobalHandler() || ErrorUtils._globalHandler;
        ErrorUtils.setGlobalHandler(this.wrapGlobalHandler);  //feed errors directly to our wrapGlobalHandler function
      }
    }
    async wrapGlobalHandler(error, isFatal) {
      try {
        //logError('wrapGlobalHandler', { error, isFatal });
      } catch (err) { 
        console.log(err); 
      }
      //  After you're finished, call the defaultHandler so that
      //  react-native also gets the error.
      this.defaultHandler(error, isFatal);
    }
    onBeforeLift() {
      //console.log('before lift');
    }
    render() {
      return (
      <ApolloProvider client={ apolloClient }>  
        <Provider store={ store }>
          <PersistGate 
          onBeforeLift={ this.onBeforeLift } 
          persistor={ persistor }>
              <App />
          </PersistGate>
        </Provider>
      </ApolloProvider>  
      );
    }
}

export default Setup;