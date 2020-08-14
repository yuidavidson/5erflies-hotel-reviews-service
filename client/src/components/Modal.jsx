import React from 'react';
import ReactDOM from 'react-dom';
import TotalRating from './TotalRating.jsx';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';

// const modalRoot = document.getElementById('modal-root');

function Modal(props) {
  const {
    show, closeModal, totalRating, averageRatings, reviews,
  } = props;
  const modal = (
    <>
      <div className={show === true ? 'overlay' : 'hide'} onClick={closeModal}/>
      <div className={show === true ? 'modal' : 'hide'}>
        <button onClick={closeModal}>X</button>
        <TotalRating totalRating={totalRating} />
        <Ratings averageRatings={averageRatings} />
        <ReviewList reviews={reviews} />
      </div>
    </>
  );
  return ReactDOM.createPortal(
    modal, document.getElementById('modal-root'),
  );
}

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     if (!this.props.totalRatings) {
//       return (
//         <div>Not yet Rendered</div>
//       );
//     }
//     return ReactDOM.createPortal(
//       <>
//         <div className={this.props.show === true ? 'overlay' : 'hide'} onClick={this.props.closeModal}/>
//           <div className={this.props.show === true ? 'modal' : 'hide'}>
//           <button onClick={this.props.closeModal}>X</button>
//           <h1>Modal heading</h1>
//           <p>This is modal content</p>
//           <TotalRating totalRating={this.props.totalRating} />
//       </div>
//     </>,
//     document.getElementById('modal-root'),
//     );
//   }
// }

export default Modal;
