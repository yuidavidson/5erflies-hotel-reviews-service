import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import TotalRating from './TotalRating';
import Ratings from './Ratings';
import ReviewList from './ReviewList';

// const modalRoot = document.getElementById('modal-root');

const ModalCloseButton = styled.div`
position: absolute;
right: -1rem;
top: -1rem;
width: 2rem;
height: 2rem;
padding: 0.5rem;
margin: 0 auto;
border-radius: 50%;
box-shadow: 1px 1px 1px #0000003a;
cursor: pointer;
border: 1px solid rgba(0, 0, 0, 0.562);
`;

const StyledModal = styled.div`  width: 500px;
position: relative;
margin: 0px auto;
padding: 20px;
background-color: #fff;
border-radius: 2px;
transform: translateY(100%);
transition: transform 0.2s ease;
box-shadow: 0 2px 8px 3px;
font-family: Helvetica, Arial, sans-serif;
`;

// const Button = styled.div`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `;

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: #0000003a;
transition: opacity 0.2s ease;
display: ${props => props.show ? 'block' : 'none'};
`;

// const show = {
//   display: 'block',
// };

// const hide = {
//   display: 'none',
// }

function Modal(props) {
  const {
    show, closeModal, totalRating, averageRatings, reviews,
  } = props;
  const modal = (
    <>
      {/* <Overlay className={show === true ? 'overlay' : 'hide'} onClick={closeModal}/> */}
      <Overlay props={show} />
      <StyledModal className={show === true ? 'modal' : 'hide'}>
        {/* <Button /> */}
        <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
        <TotalRating totalRating={totalRating} />
        <Ratings averageRatings={averageRatings} />
        <ReviewList reviews={reviews} />
      </StyledModal>
    </>
  );
  return ReactDOM.createPortal(
    modal, document.getElementById('modal-root'),
  );
}

export default Modal;
