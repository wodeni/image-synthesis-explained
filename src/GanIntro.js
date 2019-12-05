import * as React from "react";
import bg1 from "./assets/bg1.jpg";
import diophantus from "./assets/diophantus.gif";
import gandalf from "./assets/gandalf.gif";
import { TransparentBox, Cat, Dog, H1, P, Page } from "./Util";
import { Flex, Box } from "reflexbox";
import { Image } from "rebass";
import Emoji from "react-emoji-render";
import catdog1 from "./assets/catdog-1.png";
import catdog2 from "./assets/catdog-2.png";
import catdog3 from "./assets/catdog-3.png";
import catdog4 from "./assets/catdog-4.png";

const images = [catdog1, catdog2, catdog3, catdog4];

export default () => (
  <Page bg="background" className="section">
    <Box position="top" textAlign="center">
      {images.map(im => {
        return <Image src={im} width="25%"></Image>;
      })}
    </Box>
    <Box mt={5} position="bottom">
      <P fontSize={4} color="primary" mx={5}>
        At the beginning, the dog-looking cat is easily identified by the
        Diophantus, and the Gandalf need to improve the dog-look magic to make
        the cat looks more like a dog. After many many rounds of making dog look
        and identify fake dog, finally a dog-look cat get passed by the
        Diophantus.
        <br />
        <br />
        That’s actually how GAN (Generative Adversarial Networks) works.{" "}
        <strong>G</strong>andalf is the{" "}
        <i>
          <strong>G</strong>enerative Network
        </i>{" "}
        and <strong>D</strong>iophantus is the{" "}
        <i>
          <strong>D</strong>iscriminative Network
        </i>
        . And the final dog-look cat who get passed is the output of GAN. The
        generative network generates candidates and discriminative network
        evaluates them.
      </P>
    </Box>
  </Page>
);
