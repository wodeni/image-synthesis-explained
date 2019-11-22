import React from "react";
import generator from "./generator.jpg";
import { Provider, Heading, Subhead } from "rebass";
import { Hero, CallToAction, ScrollDownIndicator } from "react-landing-page";
import { Cat, Dog } from "./Util";

export const Landing = (props: any) => (
  <Provider
    theme={{
      fonts: {
        sans: '"Avenir Next", Helvetica, sans-serif'
      },
      fontSizes: [12, 16, 24, 36, 48, 65]
    }}
  >
    <Hero color="white" bg="rgba(0, 0, 0, 0.6)" backgroundImage={generator}>
      <Heading>A Visual Introduction to Realistic Image Synthesis </Heading>
      <Subhead>
        A tale of <Cat /> and <Dog />
      </Subhead>
      <ScrollDownIndicator />
    </Hero>
  </Provider>
);
