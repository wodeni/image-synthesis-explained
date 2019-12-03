import * as React from "react";
import { Page, P, Chip } from "./Util";
import bg2 from "./assets/bg2.jpg";
import dog from "./assets/dog.png";
import { Flex, Box } from "@rebass/grid";
import { Label, Select } from "@rebass/forms";
import { Image } from "rebass";
import Slider, { createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";

const SliderWithTooltip = createSliderWithTooltip(Slider);
function percentFormatter(v) {
  return `${v} %`;
}

export default () => (
  <Page className="section" backgroundImage={`url(${bg2})`}>
    <Box bg="overlay" textAlign="center" mx={5} borderRadius={3} p={3}>
      <Flex flexWrap="wrap">
        <Box width={1 / 3}>
          <Box mx={2}>
            <Box mx={1}>
              <Chip>Dog Category 1</Chip>
              <P color="text">Choose the dog category</P>
              <Select
                bg="primary"
                id="dog_class"
                name="Dog Category"
                defaultValue="Dog"
              >
                <option key={0}>Dog</option>
              </Select>
            </Box>
          </Box>
        </Box>
        <Box width={1 / 3}>
          <Chip>Output</Chip>
          <Box my={3} width={1}>
            <Image
              src={dog}
              sx={{
                width: ["100%", "50%"],
                borderRadius: 8
              }}
            ></Image>
          </Box>
          <Box p={3}>
            <SliderWithTooltip
              railStyle={{ backgroundColor: "#306", height: 5 }}
              trackStyle={{ backgroundColor: "#306", height: 5 }}
              handleStyle={{
                borderColor: "blue",
                height: 28,
                width: 28,
                marginTop: -14,
                backgroundColor: "black"
              }}
              tipFormatter={percentFormatter}
              tipProps={{ placement: "bottom" }}
            />
          </Box>
        </Box>

        <Box width={[1 / 3]}>
          <Box mx={1}>
            <Chip>Dog Category 2</Chip>
            <P color="text">Choose the dog category</P>
            <Select
              bg="primary"
              //   width={2/3}
              id="dog_class"
              name="Dog Category"
              defaultValue="Dog"
            >
              <option key={0}>Dog</option>
            </Select>
          </Box>
        </Box>
      </Flex>
    </Box>
  </Page>
);
