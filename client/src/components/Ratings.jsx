import React from 'react';
import styled from 'styled-components';

const AllRatings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RatingRow = styled.div`
  display: flex;
  // flex-direction: row;
  flex-direction ${props => props.show ? 'column' : 'row'};
  justify-content: space-around;
  padding-right: 50px;
`;

const RatingItem = styled.div`
  display: flex;
  height: 35px;
  align-items: center;
  justify-content: center;
`;

const RatingType = styled.span`
  width: 150px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  padding-right: 50px;
`;

const RatingBar = styled.div`
  height: 4px;
  // width: 130px;
  width: 10vh;
  // width: 800%;
  // position: relative;
  background: rgba(0, 0, 0, 0.14);
  // -moz-border-radius: 25px;
  // -webkit-border-radius: 25px;
  border-radius: 25px;
  margin: 2px;
  // padding-left: 50px;
`;

const Meter = styled.span`
  display: block;
  height: 100%;
  width: ${(props) => (props.averageRating * 20)}%;
  border-radius: 25px;
  background: black;
  // position: relative;
  // overflow: hidden;
`;

const RatingNumber = styled.span`
  width: 20px;
  text-align: center;
  padding: 2px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.averageRatings) {
      return null;
    } else {
      // this looks bad and can definitely refactor but make it work first, clean up later
      return (
        <AllRatings>
          <RatingRow show={this.props.show}>
            <RatingItem>
              <RatingType>Cleanliness</RatingType>
              <span>
                <RatingBar>
                  <Meter averageRating={this.props.averageRatings.cleanliness}></Meter>
                </RatingBar>
              </span>
              <RatingNumber>{this.props.averageRatings.cleanliness}</RatingNumber>
            </RatingItem>
            <RatingItem>
              <RatingType>Accuracy</RatingType>
              <span>
                <RatingBar>
                  <Meter averageRating={this.props.averageRatings.accuracy}></Meter>
                </RatingBar>
              </span>
              <RatingNumber>{this.props.averageRatings.accuracy}</RatingNumber>
            </RatingItem>
          </RatingRow>
          <RatingRow show={this.props.show}>
            <RatingItem>
              <RatingType>Communication</RatingType>
              <span>
                <RatingBar>
                  <Meter averageRating={this.props.averageRatings.communication}></Meter>
                </RatingBar>
              </span>
              <RatingNumber>{this.props.averageRatings.communication}</RatingNumber>
            </RatingItem>
            <RatingItem>
              <RatingType>Location</RatingType>
              <span>
                <RatingBar>
                  <Meter averageRating={this.props.averageRatings.location}></Meter>
                </RatingBar>
              </span>
              <RatingNumber>{this.props.averageRatings.location}</RatingNumber>
            </RatingItem>
          </RatingRow>
          <RatingRow show={this.props.show}>
            <RatingItem>
              <RatingType>Check-in</RatingType>
              <span>
                <RatingBar>
                  <Meter averageRating={this.props.averageRatings.checkIn}></Meter>
                </RatingBar>
              </span>
              <RatingNumber>{this.props.averageRatings.checkIn}</RatingNumber>
            </RatingItem>
            <RatingItem>
              <RatingType>Value</RatingType>
              <span>
                <RatingBar>
                  <Meter averageRating={this.props.averageRatings.value}></Meter>
                </RatingBar>
              </span>
              <RatingNumber>{this.props.averageRatings.value}</RatingNumber>
            </RatingItem>
          </RatingRow>
        </AllRatings>
      )
    }
  }
}

export default Ratings;
