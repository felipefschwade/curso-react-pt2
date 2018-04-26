import React, { Component } from 'react';
import Header from './componentes/Header';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import Timeline from './componentes/Timeline';
import {TimelineReducer} from './reducers/TimelineReducer'
import {HeaderReducer} from './reducers/HeaderReducer'

const reducers = combineReducers({TimelineReducer,HeaderReducer})
const store = createStore(reducers,applyMiddleware(thunkMiddleware));

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <Header store={store}/>
          <Timeline login={this.props.params.login} store={store}/>
        </div>
      </div>
    );
  }
}

export default App;
