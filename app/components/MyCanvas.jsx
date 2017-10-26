import React from 'react';
import { connect } from 'react-redux';
import { Layer, Rect, Stage, Group } from 'react-konva';
import { Dialog } from '@blueprintjs/core';

import '../assets/scss/main.scss';
import Search from './Search.jsx';

/**
 * canvas wrapper component
 */
class MyCanvas extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchOpen: false };
  }

  getMousePosition(evt) {
    const rect = this.context.getBoundingClientRect();
    console.log('rect', rect);
    const scaleX = this.context.width / rect.width;
    const scaleY = this.context.height / rect.height;
    return {
      x: (evt.clientX - rect.left) * scaleX,
      y: (evt.clientY - rect.top) * scaleY,
    };
  }

  closeSearchDialog() {
    this.setState({ searchOpen: false });
  }

  drawImage(imageUrl) {
    const ctx = this.context.getContext('2d');
    const root = document.getElementById('root');
    ctx.clearRect(0, 0, this.context.width, this.context.height);
    const image = new Image();
    image.onload = () => {
      console.log('loaded image', image.width, image.height);
      ctx.drawImage(image, this.state.mousePos.x, this.state.mousePos.y, 100, 100);
    };
    image.src = imageUrl;
    this.closeSearchDialog();
  }

  handleClick(e) {
    const mousePos = this.getMousePosition(e);
    console.log('mouse position ', mousePos);
    console.log('canvas ', e.offsetX, e.clientX);
    this.setState({ searchOpen: !this.state.searchOpen, mousePos });
  }
  render() {
    console.log('my canvas');
    return (
      <div className="search-wrapper">
        <Dialog className="search-dialog" isOpen={this.state.searchOpen}>
          <Search close={this.closeSearchDialog.bind(this)} drawImage={this.drawImage.bind(this)} />
        </Dialog>
        <canvas className="my-canvas" ref={c => this.context = c} onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(MyCanvas);
