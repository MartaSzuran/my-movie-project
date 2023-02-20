import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import requestErrorHandler from './utils/requestErrorHandler';
import store from './redux/store/index';
import App from './App';
import './styles/constants.css';
import './index.css';

const { REACT_APP_API_GRAPHQL_URL } = process.env;

const apolloClient = new ApolloClient({
  uri: `${REACT_APP_API_GRAPHQL_URL}`,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: requestErrorHandler,
  }),
});

root.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ApolloProvider>
  </Provider>,
);
