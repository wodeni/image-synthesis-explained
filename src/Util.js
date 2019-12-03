import Emoji from "react-emoji-render";
import React from "react";
import {
  typography,
  border,
  layout,
  flexbox,
  space,
  color
} from "styled-system";
import styled from "styled-components";

export const Video = styled("video")(layout);
export const Box = styled("div")(border, typography, space, color);
export const P = styled("p")(typography, space, color, flexbox);
export const Page = styled.div`
  ${color}
`;
// const Video = styled("video")(space, flexbox);
export const Cat = () => <Emoji text=":cat:" />;
export const Dog = () => <Emoji text=":dog:" />;
