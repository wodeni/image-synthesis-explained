import Emoji from "react-emoji-render";
import React from "react";
import {
  position,
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
export const H1 = styled("h1")(typography, space, color, flexbox, layout);
export const Page = styled.div`
  ${color}
  ${background}
  ${layout}
  ${position}
`;
export const TransparentBox = ({ ...props }) => (
  <Box {...props} borderRadius="3" boxShadow="0 2px 4px rgba(0, 0, 0, .125)" />
);

export const Chip = ({ ...props }) => (
  <Box
    borderRadius={[4, 2, 0]}
    mx={5}
    p={1}
    bg="chip"
    fontSize={[4, 4, 1]}
    color="text"
    {...props}
  />
);

export const Cat = () => <Emoji text=":cat:" />;
export const Dog = () => <Emoji text=":dog:" />;
