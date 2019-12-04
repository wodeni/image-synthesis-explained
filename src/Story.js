import * as React from "react";
import { Box, Page, Cat, Dog } from "./Util";

export default () => (
  <Page bg="background" className="section">
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
