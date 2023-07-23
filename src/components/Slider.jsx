import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";
import slide5 from "../images/slide5.png";
import slide6 from "../images/slide6.png";
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
      name: "LAZAREVA",
      description: "Сайт - визитка для пластического хирурга",
    },

    {
      slide: slide5,
      name: "SKVERNA",
      description: "Каталог масок в японском стиле",
    },

    {
      slide: slide6,
      name: "Endless Journey",
      description: "Сайт для выбора тура по России",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <Stack
      direction="row"
      className="bg-[#1E1E1E] p-5 rounded-lg max-sm:hidden max-sm:bg-transparent max-sm:p-0"
      spacing={2}
    >
      <Carousel
        autoPlay={true}
        animation="slide"
        className="w-[792px] flex items-center justify-center max-sm:flex max-sm:flex-col"
        duration={700}
        indicators={false}
        navButtonsAlwaysVisible={true}
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
          maxWidth: "712px",
          minWidth: "286px",
        }}
        indicatorContainerProps={{
          style: {
            display: "flex",
            justifyContent: "center",
            width: "182px",
            position: "relative",
            marginLeft: "0px",
            top: "180px",
            right: "38.5%",
            zIndex: 5,
          },
        }}
        onChange={handleChange}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <div className="name-content flex flex-col relative pl-5 max-sm:hidden">
        <div className="w-full">
          <h2 className="text-white text-[22px] font-medium text-center">
            {items[activeIndex].name}
          </h2>
        </div>
        <div className="w-full items-center justify-center">
          <p className="text-white ml-10 w-[362px] mt-[138px] text-[22px] font-medium leading-10">
            {items[activeIndex].description}
          </p>
        </div>
      </div>
    </Stack>
  );
}

function Item(props) {
  return (
    <Paper
      style={{
        minWidth: "712px",
        minHeight: "408px",
        position: "relative",
        backgroundColor: "#1c1c1c",
        zIndex: 2,
      }}
    >
      <img
        className="w-[712px]"
        src={props.item.slide}
        alt={props.item.description}
      />
    </Paper>
  );
}

export default Slider;
