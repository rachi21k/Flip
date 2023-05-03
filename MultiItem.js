import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './carsousel.css';
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import React from 'react'

let slidesToShow = 3;

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick, currentSlide } = props;
    return (
      <>
        {slidesToShow !== 0 && (
          <span className="slick-prev" onClick={onClick}>
            <ArrowBackIos style={{ color: 'blue', fontSize: '50px' }} />
          </span>
        )}
      </>
    );
  };



  const NextBtn = (props) => {
    const { className, onClick, slideCount, currentSlide } = props;
    // console.log(props);
    return (
      <>
        {currentSlide !== slideCount - slidesToShow && (
          <div className="slick-next" onClick={onClick}>
            <ArrowForwardIos style={{ color: 'blue', fontSize: '30px' }} />
          </div>
        )}
      </>
    );
  };
  
  const MultiItem = ({ data }) => {
    const settings = {
      prevArrow: <PreviousBtn />,
      nextArrow: <NextBtn />,
      infinite: false,
      slidesToShow: slidesToShow,
      slidesToScroll: 2,
    };
    return (
      <div class="tag">
        <div class="imgslider">
          <Slider {...settings}>
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    );
  };
  



  const Card = ({ item }) => {
    return (
      <div style={{ textAlign: 'center' }}>
        <img
          className='multi__image'
          src={item.image}
          style={{
            width: '75%',
            height: '170px',
            objectFit: 'contain',
            marginBottom: '10px',
            marginLeft:' 50px',
            marginRight:'0px',
          }}
        />
        <p style={{ fontSize: '14px', padding: '5px 0' }}>TOP TRNDING TVs</p>
        <p style={{ fontSize: '16px', padding: '5px 0', color: 'green' }}>
          From ₹ 7,000
        </p>
        <p style={{ fontSize: '14px', padding: '5px 0', color: 'gray' }}>
          Up To ₹ 5,000 Off on HDFC
          
        </p>
      </div>
    );
  };
  
export default MultiItem;


