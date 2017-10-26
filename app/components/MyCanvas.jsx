import React from 'react';
import { connect } from 'react-redux';
import { Layer, Rect, Stage, Group } from 'react-konva';

import '../assets/scss/main.scss';

/**
 * canvas wrapper component
 */
class MyCanvas extends React.Component {

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
  handleClick(e) {
    const mousePos = this.getMousePosition(e);
    console.log('mouse position ', mousePos);
    console.log('canvas ', e.offsetX, e.clientX);
    const { clientX, clientY } = e;
    const ctx = this.context.getContext('2d');
    const root = document.getElementById('root');
    ctx.clearRect(0, 0, this.context.width, this.context.height);
    // ctx.fillStyle = '#0000000';
    // ctx.fillRect(mousePos.x, mousePos.y, 4, 4);
    const image = new Image();
    image.onload = () => {
      console.log('loaded image', image.width, image.height);
      ctx.drawImage(image, mousePos.x, mousePos.y, 100, 100);
    };
    image.src = 'https://www.google.com/streetview/images/understand/publishing-carousel3.jpg';
  }
  render() {
    console.log('my canvas');
    return (
      <canvas className="my-canvas" ref={c => this.context = c} onClick={this.handleClick.bind(this)} />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(MyCanvas);
