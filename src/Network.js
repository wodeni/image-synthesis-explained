import * as React from "react";
import { Page, Box, Video } from "./Util";
import story from "./assets/story.mp4";
import overlay from "./assets/gan-components-overlay.png";
import { Image } from "rebass";

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
          <Image
            bg="rgba(0.2, 0.2, 0.2, 0.5)"
            width="80%"
            src={overlay}
            sx={{
              position: "absolute",
              display: this.state.isHovering ? "" : "none"
            }}
          ></Image>
          <Video
            width="80%"
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
