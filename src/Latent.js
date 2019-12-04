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

const dogClasses = {
  Chihuahua: 151,
  "Shih-Tzu": 155,
  "Golden retriever": 207,
  "Border collie": 232,
  "Pembroke Weish corgi": 263
};

export default class Latent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0.5,
      dogClass1: "Chihuahua",
      dogClass2: "Border collie"
    };
  }
  getLerpImage() {
    const { dogClass1, dogClass2, weight } = this.state;
    const [d1, d2] = [dogClass1, dogClass2].map(x => dogClasses[x]);
    const img = require(`./assets/lerp/lerp-${d1}-${d2}-${weight}.png`);
    return img;
  }
  getDogImage(cls) {
    const img = require(`./assets/lerp/lerp-${cls}.png`);
    return img;
  }

  render() {
    const DogSelect = props => (
      <Box mx={1}>
        <Chip>{props.label}</Chip>
        <P color="text">Choose the dog category</P>
        <Select
          bg="primary"
          name="Dog Category"
          value={props.value}
          onChange={props.onChange}
        >
          {props.options}
        </Select>
      </Box>
    );
    return (
      <Page className="section" backgroundImage={`url(${bg2})`}>
        <Box bg="overlay" textAlign="center" mx={5} borderRadius={3} p={3}>
          <Flex flexWrap="wrap">
            <Box width={1 / 3}>
              <Box mx={2}>
                <DogSelect
                  label="Dog category 1"
                  value={this.state.dogClass1}
                  onChange={e => {
                    this.setState({ dogClass1: e.target.value });
                  }}
                  options={Object.entries(dogClasses).map(([name, index]) => {
                    if (name !== this.state.dogClass2)
                      return <option key={index}>{name}</option>;
                  })}
                />
              </Box>
              <Box my={3} width={1}>
                <Image
                  src={this.getDogImage(dogClasses[this.state.dogClass1])}
                  sx={{
                    width: ["100%", "50%"],
                    borderRadius: 8
                  }}
                ></Image>
              </Box>
            </Box>
            <Box width={1 / 3}>
              <Chip>Output</Chip>
              <Box my={3} width={1}>
                <Image
                  src={this.getLerpImage()}
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
                  step={0.2}
                  reverse
                  defaultValue={0.5}
                  min={0.1}
                  max={0.9}
                  tipFormatter={value => `Weight: ${value}`}
                  tipProps={{ placement: "bottom" }}
                  onChange={v => this.setState({ weight: v })}
                />
              </Box>
            </Box>

            <Box width={[1 / 3]}>
              <DogSelect
                label="Dog category 2"
                value={this.state.dogClass2}
                onChange={e => {
                  console.log(e.target.value);
                  this.setState({ dogClass2: e.target.value });
                }}
                options={Object.entries(dogClasses).map(([name, index]) => {
                  if (name !== this.state.dogClass1)
                    return <option key={index}>{name}</option>;
                })}
              />
              <Box my={3} width={1}>
                <Image
                  src={this.getDogImage(dogClasses[this.state.dogClass2])}
                  sx={{
                    width: ["100%", "50%"],
                    borderRadius: 8
                  }}
                ></Image>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Page>
    );
  }
}
