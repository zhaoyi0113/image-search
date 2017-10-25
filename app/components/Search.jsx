import React from 'react';
import { connect } from 'react-redux';

import actions from '../actions';

class Search extends React.Component {

  componentDidMount() {
    this.props.queryImages('images');
  }

  render() {
    console.log('render', this.props.images);
    return (<div className="content" />);
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    queryImages: (text) => {
      return dispatch(actions.queryImages(text));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    images: state.images,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
