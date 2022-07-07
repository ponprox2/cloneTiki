import React from 'react';

import AppNavigator from './src/AppNavigator/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
