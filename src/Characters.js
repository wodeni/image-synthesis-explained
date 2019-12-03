import * as React from "react";
import bg1 from "./assets/bg1.jpg";
import diophantus from "./assets/diophantus.png";
import gandalf from "./assets/gandalf.png";
import { H1, P, Box, Page } from "./Util";
import { Image } from "rebass";

export default () => (
  <Page backgroundImage={`url(${bg1})`} className="section">
    <Box bg="overlay" textAlign="center" mx={6} borderRadius={3} p={2}>
      <H1 textAlign="center" color="text">
        Let's start with a story...
      </H1>
      <P color="text" fontSize={4}>
        In the far far magic land, there are two famous sorceress:
        <strong>Gandalf</strong> and <strong>Diophantus</strong>. <br />
        Gandalf could magically create fake look for animals.
        <br />
        Diophantus could...
        <br />
        <Image src={gandalf} />
        <Image src={diophantus} />
      </P>
    </Box>
  </Page>
);
