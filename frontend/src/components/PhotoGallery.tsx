import React, { useState } from "react";
import "./PhotoGallery.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import elegantBorder from "../assets/icons/elegant_leaf.png";

import bride_1 from "../assets/images/bride_1.jpg";
import green_1 from "../assets/images/green_1.jpg";
import green_4 from "../assets/images/green_4.jpg";
import green_5 from "../assets/images/green_5.jpg";
import green_6 from "../assets/images/green_6.jpg";
import groom_1 from "../assets/images/groom_1.jpg";
import sea_2 from "../assets/images/sea_2.jpg";
import sea_3 from "../assets/images/sea_3.jpg";
import sea_7 from "../assets/images/sea_7.jpg";
import stone_1 from "../assets/images/stone_1.jpg";
import stone_2 from "../assets/images/stone_2.jpg";
import stone_3 from "../assets/images/stone_3.jpg";
import stone_4 from "../assets/images/stone_4.jpg";
import stone_5 from "../assets/images/stone_5.jpg";
import { Modal } from "@mui/material";

const PhotoGallery: React.FC = () => {
  const itemData = [
    { img: green_4, title: "green_4" },
    { img: green_1, title: "green_1" },
    { img: groom_1, title: "groom_1" },
    { img: green_5, title: "green_5" },
    { img: green_6, title: "green_6" },
    { img: stone_5, title: "stone_5" },
    { img: stone_1, title: "stone_1" },
    { img: stone_2, title: "stone_2" },
    { img: bride_1, title: "bride_1" },
    { img: stone_3, title: "stone_3" },
    { img: stone_4, title: "stone_4" },
    { img: sea_7, title: "sea_7" },
    { img: sea_3, title: "sea_3" },
    { img: sea_2, title: "sea_2" },
  ];
  // 엘레강트...그잡채
  const [isOpen, setIsOpen] = useState(false);
  const [clickedTarget, setClickedTarget] = useState<number>(0);
  const onImgClickHandler = (event: React.MouseEvent) => {
    event.target instanceof HTMLImageElement &&
      setClickedTarget(Number(event.target.id));
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ padding: "2rem 0", backgroundColor: "#f9f9f9" }}>
      <img src={elegantBorder} width="12%" />
      <p style={{ fontSize: "1.5rem" }}>사진첩</p>
      <ImageList variant="masonry" cols={2} gap={8}>
        {itemData.map((item, idx) => (
          <ImageListItem key={item.img}>
            <img
              id={String(idx)}
              onClick={onImgClickHandler}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              className="singularImg"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <img className="modal-transition " src={itemData[clickedTarget].img} />
      </Modal>
    </div>
  );
};

export default PhotoGallery;
