import * as React from "react";
import { H1, P, Page } from "./Util";
import diagram from "./assets/GAN-diagram4.jpg";
import { Flex } from "reflexbox";
import { Image } from "rebass";

export default () => (
  <Page bg="background" className="section">
    <H1 mb={4} textAlign="center" color="primary" fontSize={6}>
      GAN Networks Components
    </H1>
    <Flex justifyContent="center">
      <Image
        width={3 / 5}
        mx={3}
        mb={3}
        src={diagram}
        sx={{
          borderRadius: 10
        }}
      ></Image>
    </Flex>
    <P m={4} color="primary" fontSize={3}>
      <strong>Generative Adversarial Networks</strong> comprise of two models:
      <ul>
        <li>
          In a GAN, its two networks influence each other as they iteratively
          update themselves.
        </li>
        <li>
          The generator incrementally updates to improve itself to generate fake
          samples that are increasingly more realistic. The generator does it by
          trying to fool the discriminator. The generator loss value decreases
          when the discriminator classifies fake samples as real This way, the
          generator gradually improves to produce samples that are even more
          realistic.
        </li>
        <li>
          Once the fake samples are updated, the discriminator will update
          accordingly to finetune its decision boundary, and awaits the next
          batch of fake samples that try to fool itself. This iterative update
          process continues until the discriminator cannot tell real and fake
          samples apart.
        </li>
      </ul>
    </P>
  </Page>
);
