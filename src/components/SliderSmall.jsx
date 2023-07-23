import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";
import slide5 from "../images/slide5.png";
import slide6 from "../images/slide6.png";

function SliderSmall(props) {
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

  return (
    <Carousel
      indicatorIconButtonProps={{
        style: {
          color: "#035A65",
          marginLeft: "16px",
          position: "relative",
          bottom: "30px",
          zIndex: 5,
        },
      }}
      activeIndicatorIconButtonProps={{
        style: { color: "#00E0FF" },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: 10,
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      style={{
        backgroundColor: "#2C2C2C",
        maxWidth: "286px",
        maxHeight: "399px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <img src={props.item.slide} alt={props.item.description} />
      <div className="hidden max-sm:block flex flex-col items-center justify-center text-white text-base font-normal leading-7  pb-9">
        <h2 className="text-white text-center font-bold leading-7 mt-[24px]">
          {props.item.name}
        </h2>
        <p className="text-white text-center h-[88px] text-sm font-medium leading-[44px]">
          {props.item.description}
        </p>
      </div>
    </Paper>
  );
}

export default SliderSmall;
