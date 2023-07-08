import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";
import { Stack } from "@mui/material";

function Slider(props) {
  var items = [
    {
      slide: slide1,
      name: "Realty IBC",
      description: "Сайт по продаже недвижимости от независимого агенства",
    },
    {
      slide: slide2,
      name: "ORIGAMI",
      description: "Сайт кофетерия",
    },

    {
      slide: slide3,
      name: "ORTIZ",
      description: "Сайт портфолио для веб - разработчика",
    },

    {
      slide: slide4,
      name: "SKVERNA",
      description: "Каталог масок в японском стиле",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Carousel
        autoPlay={true}
        animation="slide"
        className="w-full flex items-center justify-center"
        duration={700}
        indicators={false}
        indicatorIconButtonProps={{
          style: {
            color: "#035A65",
            marginLeft: "16px",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: { color: "#00E0FF" },
        }}
        height="408px"
        sx={{
          width: "712px",
        }}
        indicatorContainerProps={{
          style: {
            display: "flex",
            justifyContent: "center",
            position: "relative",
            paddingRight: "0px",
            marginLeft: "0px",
          },
        }}
        onChange={handleChange}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <div className="name-content flex flex-col items-center justify-center relative left-40">
        <h2 className="text-white text-[22px] font-medium">
          {items[activeIndex].name}
        </h2>
        <p className="text-white text-[22px] font-medium leading-10">
          {items[activeIndex].description}
        </p>
      </div>
    </Stack>
  );
}

function Item(props) {
  return (
    <Paper
      style={{
        width: "712px",
        height: "408px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <img src={props.item.slide} alt={props.item.description} />
    </Paper>
  );
}

export default Slider;
