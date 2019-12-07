import * as React from "react";
import { Cat, Dog, P, Page } from "./Util";
import { Box } from "reflexbox";
import { Image } from "rebass";
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
        At the beginning, <Cat /> is easily identified by Diophantus, and
        Gandalf needs to improve his magical ability to make the her looks more
        like a <Dog />. After many many rounds of foing so, finally a <Dog />
        -look gets passed by the Diophantus.
        <br />
        <br />
        In a very general sense, the <Cat />
        's story is very similar to a typical image synthesis task in our
        non-magical world. The Halloweean party set-up in fact resembles how{" "}
        <strong>Generative Adversarial Networks (GAN)</strong> work, where{" "}
        <strong>G</strong>
        andalf is the{" "}
        <i>
          <strong>G</strong>enerative Network
        </i>{" "}
        and <strong>D</strong>iophantus is the{" "}
        <i>
          <strong>D</strong>iscriminative Network
        </i>
        . And the final <Dog />
        -looking <Cat /> who get passed is the output of GAN. The generative
        network generates candidates and discriminative network evaluates them.
      </P>
    </Box>
  </Page>
);
