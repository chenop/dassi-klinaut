import React from 'react';
import mainImage from "../assets/main.jpg";
import {css} from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
 width: 100%;
`;

const Gallery = () => {
    return (
        <Container>
            image
            {/*<img*/}
            {/*    src={mainImage}*/}
            {/*    className={css({*/}
            {/*        objectFit: "contain",*/}
            {/*    })}*/}
            {/*/>*/}
        </Container>
    );
};

export default Gallery;
