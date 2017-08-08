import React, { PropTypes, Component } from "react";
import Header from './common/Header';

function App (props) {
  return (
      <div className="container">
          <Header />
          {props.children}
      </div>
  );
}

App.propTypes = { children: PropTypes.object };
export default App;