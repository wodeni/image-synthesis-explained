import React from "react";
import generator from "./assets/generator.jpg";
import LazyHero from "react-lazy-hero";
import { Cat, Dog } from "./Util";
import styled from "styled-components";
import { typography, fontWeight } from "styled-system";

const Heading = styled.h1`
  ${typography}
  ${fontWeight}
  color: white;
  font-size: 3.5em;
`;
const SubHead = styled.h2`
  ${typography}
  ${fontWeight}
  color: white
  font-size: 2em;
`;

export const Landing = props => (
  <div className="section">
    <LazyHero
      imageSrc={generator}
      minHeight="100vh"
      color="black"
      opacity={0.4}
    >
      <Heading>A Visual Introduction to Realistic Image Synthesis</Heading>
      <SubHead>
        A tale of <Cat /> and <Dog />
      </SubHead>
    </LazyHero>
  </div>
);
