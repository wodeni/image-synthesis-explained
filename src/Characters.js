import * as React from "react";
import bg1 from "./assets/bg1.jpg";
import diophantus from "./assets/diophantus.gif";
import gandalf from "./assets/gandalf.gif";
import { TransparentBox, Cat, Dog, H1, P, Page } from "./Util";
import { Flex, Box } from "reflexbox";
import { Image } from "rebass";
import Emoji from "react-emoji-render";

export default () => (
  <Page bg="secondary" className="section">
    <Box bg="overlay" textAlign="center" mx={6} borderRadius={3} p={2}>
      <H1 textAlign="center" color="text" fontSize={6}>
        Let's start with a story...
      </H1>
      <P color="text" fontSize={4}>
        In the far far magic land, there are two famous wizards:{" "}
        <strong>Gandalf</strong> and <strong>Diophantus</strong>.
        <Flex my={5} justifyContent="center">
          <Box
            width={1 / 3}
            mx={4}
            bg="#dcc2ee80"
            sx={{
              borderRadius: "10% 10%"
            }}
          >
            <Image src={gandalf} height={300} />
            <P mx={3}>
              Gandalf can magically create fake looks for animals, for example,
              turning <Cat /> to <Dog />.
            </P>
          </Box>
          <Box
            width={1 / 3}
            mx={4}
            bg="#dcc2ee80"
            sx={{
              borderRadius: "10% 10%"
            }}
          >
            <Image src={diophantus} height={300} />
            <P mx={3}>
              Diophantus has a very knowledgable <Emoji text=":mag_right:" />{" "}
              that has seen many animals and remembered how they look like over
              the years.
            </P>
          </Box>
        </Flex>
      </P>
    </Box>
  </Page>
);
