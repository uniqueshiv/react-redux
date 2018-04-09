import React, { Component } from 'react';
import Routers from './Route';
import {Provider} from 'react-redux';



// react redux functionality
/*
 store ->provider->container/components
*/

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
          <Routers />
      </Provider>

    );
  }
}

export default App;
