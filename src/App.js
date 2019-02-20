import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Client from './components/client/client'
import Developer from './components/developer'
import {Provider} from 'react-redux'
import Clientheader from './components/client/clientheader'

import store from './store/store'
class App extends Component {
  render() {
    const clienttoken=localStorage.getItem('clienttoken')
    if(clienttoken){
    return (
      <Provider store={store}>
        <div className="App">
          <Clientheader/>
        </div>
      </Provider>
    );
  }
  const developertoken = localStorage.getItem('developertoken')
  if(developertoken){
    return (
      <Provider store={store}>
        <div className="App">
          <Developer/>
        </div>
      </Provider>
    );
  }
  else{
  return (
    <Provider store={store}>
      <div className="App">
      <Header/>
      </div>
    </Provider>
  );
}

}
}
export default App;
