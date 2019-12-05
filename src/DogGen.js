import * as React from "react";
import { Dog, Page, P, Chip, Cat } from "./Util";
import { Flex, Box } from "@rebass/grid";
import dogClasses from "./data/dogClasses.json";
import catClasses from "./data/catClasses.json";
import { Image } from "rebass";
import { Label, Select } from "@rebass/forms";
import Slider, { createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import bg2 from "./assets/bg2-half.jpg";
import Emoji from "react-emoji-render";

const classes = { ...dogClasses };

export default class DogGen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      class: Object.keys(classes)[0]
    };
  }
  getImages() {
    const cls = classes[this.state.class];
    const img = require(`./assets/gen/${cls}-3.png`);
    const img1 = require(`./assets/gen/${cls}-35.png`);
    const img2 = require(`./assets/gen/${cls}-93.png`);
    return [img, img1, img2];
  }

  render() {
    const images = this.getImages();
    const imgStyle = {
      border: "5px solid #609",
      borderRadius: 9999
    };

    return (
      <Page
        className="section"
        backgroundImage={`url(${bg2})`}
        backgroundSize="cover"
      >
        <Flex>
          <Box
            width={1 / 2}
            mx={5}
            p={2}
            //   bg="rgb(113, 22, 237)"
          >
            <P fontSize={5} color="text" fontWeight="bold">
              So, can GAN(dolf) help the <Cat />? Let's try it with real images.
              You can pick your favorite type of <Dog /> and start generating
              some images here <Emoji text=":arrow_right:"></Emoji>
            </P>
            <P fontSize={3} color="text" fontWeight="light">
              The three images correspond to three input vectors to the network
              for the same class of dogs, generated with differernt random
              seeds.
            </P>
          </Box>
          <Box
            width={1 / 2}
            id="latentOverlay"
            bg="#cdb7ddff"
            textAlign="center"
            mx={5}
            p={3}
            borderRadius={4}
          >
            <Flex flexWrap="wrap">
              <Box width={1}>
                <Box mx={2}>
                  <Box mx={1}>
                    <Chip>Dog category</Chip>
                    <P color="primary">Choose a dog category</P>
                    <Select
                      value={this.state.class}
                      bg="secondary"
                      color="#609"
                      onChange={e => {
                        this.setState({ class: e.target.value });
                      }}
                    >
                      {Object.entries(classes).map(([name, index]) => {
                        return <option key={index}>{name}</option>;
                      })}
                    </Select>
                  </Box>
                </Box>
              </Box>
              <Box width={1} my={3}>
                <Chip>Outputs</Chip>
                <Flex width={1} my={3} flexDirection="row">
                  <Box width={1 / 3} m={1}>
                    <Image src={images[0]} sx={imgStyle}></Image>
                  </Box>
                  <Box width={1 / 3} m={1}>
                    <Image src={images[1]} sx={imgStyle}></Image>
                  </Box>
                  <Box width={1 / 3} m={1}>
                    <Image src={images[2]} sx={imgStyle}></Image>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Page>
    );
  }
}
