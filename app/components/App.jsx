import React from 'react';
import { connect } from 'react-redux';

import '../assets/scss/main.scss';
import Search from './Search.jsx';
import MyCanvas from './MyCanvas.jsx';

const App = () => {
  return (
    <div className="root">
      <MyCanvas />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(App);
