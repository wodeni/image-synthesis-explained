import * as React from "react";
import { Page, Box, Video } from "./Util";
import story from "./assets/story.mp4";

export default () => (
  <Page bg="background" className="section">
    <Box textAlign="center">
      <Video width="100%" data-autoplay loop>
        <source src={story} type="video/mp4" />
      </Video>
    </Box>
  </Page>
);
