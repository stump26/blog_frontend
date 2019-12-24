import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import ApolloClient from './apolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';

if (process.env.NODE_ENV === 'production') {
  loadableReady(() => {
    ReactDOM.hydrate(
      <ApolloProvider client={ApolloClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>,
      document.getElementById('root'),
    );
  });
} else {
  ReactDOM.render(
    <ApolloProvider client={ApolloClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root'),
  );
}

serviceWorker.unregister();
