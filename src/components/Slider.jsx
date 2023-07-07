import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";

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

  return (
    <Carousel
      autoPlay={false}
      animation="slide"
      indicatorIconButtonProps={{
        style: {
          color: "#035A65",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: { color: "#00E0FF" },
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
    <Paper>
      <img src={props.item.slide} alt={props.item.description} />

      <div className="flex flex-col items-center justify-center relative bg-transparent bg-radiant">
        <h2 className="text-white text-[22px] font-medium">
          {props.item.name}
        </h2>
        <p className="text-white text-[22px] font-medium leading-10">
          {props.item.description}
        </p>
      </div>
    </Paper>
  );
}

export default Slider;
