import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Card from "../../components/card/card";
import { Box } from "@mui/material";
import chicken from "../../assets/images/chicken.svg";
import '../../components/layoutStyle/layout.css';
const Resizable = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const sliderRef = useRef(null);

  const unlookingFutureData = [
    {
      imgSource: chicken,
      cardTitle: "Touchless & Hygienic",
      CardContent:
        "Touchless Technology offers hygienic interaction by projecting virtual interfaces. Fostering safe and efficient interactions for people suffering from viral infections.",
    },
    {
      imgSource: chicken,
      cardTitle: "Touchless & Hygienic",
      CardContent:
        "Touchless Technology offers hygienic interaction by projecting virtual interfaces. Fostering safe and efficient interactions for people suffering from viral infections.",
    },
    {
      imgSource: chicken,
      cardTitle: "Touchless & Hygienic",
      CardContent:
        "Touchless Technology offers hygienic interaction by projecting virtual interfaces. Fostering safe and efficient interactions for people suffering from viral infections.",
    },
    {
      imgSource: chicken,
      cardTitle: "Touchless & Hygienic",
      CardContent:
        "Touchless Technology offers hygienic interaction by projecting virtual interfaces. Fostering safe and efficient interactions for people suffering from viral infections.",
    },
  ];

  const changeSlide = (index) => {
    setSelectedSlide(index);
    centerSlide(index);
  };

  const centerSlide = (index) => {
    const totalSlides = sliderRef.current.props.children.length;
    const centerIndex = Math.min(Math.max(0, index), totalSlides - 1);
    sliderRef.current.slickGoTo(centerIndex);
  };

  const handleDotClick = (index) => {
    setSelectedSlide(index);
    centerSlide(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    spacing: '10px',
    initialSlide: selectedSlide,
    arrows: false,
    customPaging: (i) => (
      <span
        style={{
          width: '7px',
          height: '7px',
          display: 'inline-block',
          background: i === selectedSlide ? '#fff' : '#EBEBF54D',
          borderRadius: '50%',
          margin: '0 auto',
        }}
        onClick={() => handleDotClick(i)}
      ></span>
    ),
  };

  return (
    <div  style={{ position: 'relative'}}>
      <Slider
        ref={sliderRef}
        {...settings}
      >
        {unlookingFutureData.map((item, index) => (
          <Box
            sx={{
              transform: 'scale(.83)',
             
            }}
            key={index}
            onClick={() => changeSlide(index)}
          >
            <Card
              sx={{ margin: '0 -27px' }}
              imgSource={item.imgSource}
              cardTitle={item.cardTitle}
              CardContent={item.CardContent}
            />
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default Resizable;
