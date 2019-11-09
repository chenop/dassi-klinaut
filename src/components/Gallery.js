import React from 'react';
import mainImage from "../assets/main.jpg";
import styled from "@emotion/styled";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Gallery = () => {
    return (
        <Image src={mainImage}  alt={"hi"} />
    );
};

export default Gallery;
