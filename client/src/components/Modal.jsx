import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={this.props.show === true ? 'modal' : 'hide'}>
          <button onClick={this.props.closeModal}>X</button>
          <h1>Modal heading</h1>
          <p>This is modal content</p>
        </div>
      </>
    )
  }
}

export default Modal;
