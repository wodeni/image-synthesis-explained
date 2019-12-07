import * as React from "react";
import { P, Page, Box, Video } from "./Util";
import story from "./assets/story-min.mp4";
import overlay from "./assets/gan-components-overlay.png";
import { Image } from "rebass";
import Emoji from "react-emoji-render";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }
  render() {
    return (
      <Page bg="background" className="section">
        <Box textAlign="center">
          <Box position="top">
            <P fontSize={4} color="primary" mx={6}>
              <i>Huh? What GAN?</i> Let's try putting the story together again
              with all that new information.
              <br />
              <strong>
                Hover over the video to see what a typical GAN network looks
                like
              </strong>{" "}
              <Emoji text=":arrow_down:"></Emoji>
            </P>
          </Box>
          <Image
            bg="rgba(0.2, 0.2, 0.2, 0.5)"
            width="70%"
            src={overlay}
            sx={{
              position: "absolute",
              display: this.state.isHovering ? "" : "none"
            }}
          ></Image>
          <Video
            width="70%"
            data-autoplay
            loop
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            <source src={story} type="video/mp4" />
          </Video>
        </Box>
      </Page>
    );
  }
}
