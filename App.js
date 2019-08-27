import React from 'react';
import { Provider } from 'react-redux';
import createStore from './src/store/createStore';
import AppContainer from './src/AppContainer';

const App = () => {
  return (
    <Provider store={createStore()}>
      <AppContainer/>
    </Provider>
  );
};

export default App;
