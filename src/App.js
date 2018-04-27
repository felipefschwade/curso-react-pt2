import React, { Component, PropTypes } from 'react';
import Header from './componentes/Header';
import Timeline from './componentes/Timeline';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <Header store={this.context.store}/>
          <Timeline login={this.props.params.login}/>
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  store : PropTypes.object.isRequired
}

export default App;