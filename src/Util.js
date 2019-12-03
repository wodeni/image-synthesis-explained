import Emoji from "react-emoji-render";
import React from "react";
import {
  typography,
  border,
  background,
  layout,
  grid,
  flexbox,
  space,
  color
} from "styled-system";
import styled from "styled-components";

export const Box = styled("div")(
  {
    boxSizing: "border-box"
  },
  border,
  typography,
  space,
  color
);
export const Grid = styled("Box")(grid);
export const Video = styled("video")(layout);
export const P = styled("p")(typography, space, color, flexbox);
export const H1 = styled("h1")(typography, space, color, flexbox);
export const Page = styled.div`
  ${color}
  ${background}
`;
export const TransparentBox = ({ ...props }) => (
  <Box
    {...props}
    css={{
      borderRadius: "4",
      boxShadow: "0 2px 4px rgba(0, 0, 0, .125)"
    }}
  />
);

export const Chip = ({ ...props }) => (
  <Box
    borderRadius={4}
    mx={5}
    p={1}
    bg="chip"
    fontSize={4}
    color="text"
    {...props}
  />
);

export const Cat = () => <Emoji text=":cat:" />;
export const Dog = () => <Emoji text=":dog:" />;
