import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <div>
          <h1 className="topMenu">
            <p className="changeMenu"><span>HANA DEMPSEY</span></p>
          </h1>
          <h2 className="navBar">
            <span>WORKS</span><span>PHOTOS</span><span>ABOUT</span><span>AWARDS</span>
          </h2>
          <footer>
            <span>SOCIAL</span>
            <span>CONTACT</span>
          </footer>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));