import React from 'react';
import { MultiTrackView } from './components/Views/MultiTrackView.js';
import { SingleTrackView } from './components/Views/SingleTrackView.js';
import { DayView } from './components/Views/DayView.js';
import { PathView } from './components/Views/PathView.js';
import { Menu } from './components/Menu/Menu.js';

import { VIEWS } from './constants.js';
import './styles/App.css';

const displayView = {
  [VIEWS.MULTITRACK]: <MultiTrackView />,
  [VIEWS.SINGLETRACK]: <SingleTrackView />,
  [VIEWS.DAY]: <DayView />,
  [VIEWS.PATH]: <PathView />
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: VIEWS.PATH
    }
  }

  keyView = (event) => {
    if (event.keyCode >= 49 && event.keyCode <= 52) {
      let setView = this.state.view;
      switch (event.keyCode) {
        case 49: setView = VIEWS.MULTITRACK; break;
        case 50: setView = VIEWS.SINGLETRACK; break;
        case 51: setView = VIEWS.DAY; break;
        case 52: setView = VIEWS.PATH; break;
        default: break;
      }

      this.setState({ view: setView });
    }
  }

  clickView = (setView) => {
    console.log("switching to " + setView);
    this.setState({ view: setView })
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyView);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyView);
  }

  render() {
    return (
      <div className="App">
        {displayView[this.state.view]}
        <Menu setViewFunction={this.clickView} />
      </div>
    );
  }
}

export default App;
