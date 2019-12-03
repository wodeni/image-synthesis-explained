import * as React from "react";
import { InlineMath, BlockMath } from "react-katex";
import { Page, P, Box } from "./Util";
import "katex/dist/katex.min.css";

const loss =
  "\\min_G \\max_D V(D, G)= \\mathbb{E}_{x\\sim p_{data}(x)}[\\log D(x)] + \\mathbb{E}_{z\\sim p_z(z)}[\\log(1 - D(G(z)))]";

export const Loss = () => (
  <Box>
    <P fontSize={3} m={3}>
      Mathematically, the loss function is defined as an minimax function:
      <BlockMath math={loss}></BlockMath>
    </P>
  </Box>
);

export default () => (
  <Page bg="background" className="section">
    <Loss></Loss>
  </Page>
);
