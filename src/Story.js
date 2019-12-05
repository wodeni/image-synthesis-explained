import * as React from "react";
import { H1, Box, Page, Cat, Dog } from "./Util";
import story1 from "./assets/story1.jpg";
import story2 from "./assets/story2.jpg";
import { Flex } from "reflexbox";
import { Image } from "rebass";
import Emoji from "react-emoji-render";

export default () => (
  <Page bg="background" className="section">
    <H1 mb={4} textAlign="center" color="primary" fontSize={6}>
      It's Halloween <Emoji text=":jack_o_lantern:"></Emoji>!
    </H1>
    <Flex justifyContent="center">
      <Image
        width={1 / 2}
        mx={3}
        mb={3}
        src={story1}
        sx={{
          borderRadius: 10
        }}
      ></Image>
      <Image
        width={1 / 2}
        mx={3}
        mb={3}
        src={story2}
        sx={{
          borderRadius: 10
        }}
      ></Image>
    </Flex>
    <Box
      fontSize={4}
      fontFamily="story"
      borderRadius={3}
      fontWeight="bold"
      p={3}
      color="white"
      bg="primary"
      textAlign="center"
      width={2 / 3}
      mx={6}
    >
      A <Cat /> wants to go to a <Dog />
      -only Halloween party, so she went to Gandolf for help, who specializes in
      magically generating
      <Dog />
      -looking cats. The key to getting into the party is to pass the <Dog />
      -ness inspection by Diophantus, so the disguise has to be
      indistinguishable from other <Dog /> guests.
    </Box>
  </Page>
);
