import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';

import actions from '../actions';

const SearchItem = ({ item, selectImage }) => {
  return (<div className="search-item" onClick={() => selectImage(item.link)} role="button">
    <img alt="loading" src={item.image ? item.image.thumbnailLink : ''} width="50" height="50" />
    <h4>{item.title}</h4>
  </div>);
};

const ItemList = ({ images, selectImage }) => {
  if (!images || images.constructor !== Array) {
    return <div className="item-list">No Content</div>;
  }
  return (<div className="item-list" >
    {
          images.map((image, i) => {
            return <SearchItem key={i} item={image} selectImage={selectImage} />;
          })
        }
  </div>
  );
};

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }

  componentDidMount() {
    // this.props.queryImages('images');
    this.input.focus();
  }

  keyPressHandle(e) {
    if (e.key === 'Enter' && this.state.searchText) {
      this.props.queryImages(this.state.searchText);
    }
  }

  selectImage(url) {
    this.props.drawImage(url);
    this.props.clearSearchImages();
  }

  render() {
    console.log('render', this.props.images);
    return (<div className="search" >
      <h3 className="search-title">Search Image On Google</h3>
      <div className="pt-input-group .modifier pt-large search-field">
        <span className="pt-icon pt-icon-search" />
        <input
          ref={input => this.input = input}
          className="pt-input"
          type="search"
          placeholder="Search input"
          dir="auto"
          onChange={e => this.setState({ searchText: e.target.value })}
          onKeyPress={this.keyPressHandle.bind(this)}
        />
      </div>
      <ItemList images={this.props.images.images} selectImage={this.selectImage.bind(this)} />
      <Button className="pt-intent-primary" onClick={() => this.props.queryImages(this.state.searchText)}>Search</Button>
      <Button className="pt-intent-warning" onClick={() => this.props.close()}>Close</Button>
    </div>);
  }

}

Search.propTypes = {
  images: React.PropTypes.object,
};

Search.defaultProps = {
  images: {},
};

const mapDispatchToProps = (dispatch) => {
  return {
    queryImages: (text) => {
      return dispatch(actions.queryImages(text));
    },
    clearSearchImages: () => {
      return dispatch(actions.clearSearchImages());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    images: state.images,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
