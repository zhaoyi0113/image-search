import React from 'react';
import { connect } from 'react-redux';

import Search from './Search.jsx';

const App = () => {
  return (
    <h2>
      hello
      <Search />
    </h2>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(App);
