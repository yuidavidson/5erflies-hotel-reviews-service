import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import TotalRating from './TotalRating';
import Ratings from './Ratings';
import ReviewList from './ReviewList';

// const modalRoot = document.getElementById('modal-root');

const ModalCloseButton = styled.div`
position: absolute;
left: 1rem;
top: 1rem;
width: 2rem;
height: 2rem;
padding: 0.5rem;
margin: 0 auto;
cursor: pointer;
`;

const StyledModal = styled.div`
width: 70vh;
height: 80vh;
position: sticky;
margin: 0px auto;
padding: 20px;
background-color: #fff;
border-radius: 10px;
transform: translateY(-700px);
transition: transform 0.2s ease;
font-family: Helvetica, Arial, sans-serif;
// overflow: hidden;
display: ${props => props.show ? 'flex' : 'none'};
`;

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
// height: 100%;
// height: 1000px;
height: 100vh;
background: #0000003a;
transition: opacity 0.2s ease;
// overflow: hidden;
// change to flex?
display: ${props => props.show ? 'flex' : 'none'};
`;

const ScrollableReviewList = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const StyledEntireModal = styled.div`
  // overflow: hidden;
`;

const LeftSideFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

function Modal(props) {
  const {
    show, closeModal, totalRating, averageRatings, reviews,
  } = props;
  const modal = (
    <>
      <StyledEntireModal>
        <Overlay show={show} />
        <StyledModal show={show}>
          <LeftSideFlex>
            <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
            <TotalRating totalRating={totalRating} />
            <Ratings averageRatings={averageRatings} show={show} />
          </LeftSideFlex>
          <ScrollableReviewList>
            <ReviewList reviews={reviews} show={show} />
          </ScrollableReviewList>
        </StyledModal>
      </StyledEntireModal>

    </>
  );
  return ReactDOM.createPortal(
    modal, document.getElementById('modalRoot'),
  );
}

export default Modal;
