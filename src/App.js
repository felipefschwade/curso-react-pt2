import React, { Component } from 'react';
import Header from './componentes/Header';
import TimelineStore from './store/TimeLineStore'
import Timeline from './componentes/Timeline';
class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App">
        <div className="main">
          <Header/>
          <Timeline login={this.props.params.login} store={new TimelineStore()}/>
        </div>
      </div>
    );
  }
}

export default App;
