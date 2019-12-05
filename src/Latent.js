import * as React from "react";
import { Page, P, Chip } from "./Util";
import bg2 from "./assets/bg2.jpg";
import bg3 from "./assets/bg3.png";
import { Flex, Box } from "@rebass/grid";
import { Label, Select } from "@rebass/forms";
import { Image } from "rebass";
import Slider, { createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import catClasses from "./data/catClasses.json";
import dogClasses from "./data/dogClasses-small.json";
import Tooltip from "rc-tooltip";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";

const SliderWithTooltip = createSliderWithTooltip(Slider);
const Handle = Slider.Handle;

export default class Latent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0.5,
      catClass: "Tiger cat",
      dogClass: "Border collie"
    };
  }
  getLerpImage() {
    const { catClass: catClass, dogClass: dogClass, weight } = this.state;
    const [c, d] = [catClasses[catClass], dogClasses[dogClass]];
    const img = require(`./assets/lerp/lerp-${d}-${c}-${weight}.png`);
    return img;
  }
  getImage(cls) {
    const img = require(`./assets/lerp/lerp-${cls}.png`);
    return img;
  }

  render() {
    const handle = props => {
      const { value, dragging, index, ...restProps } = props;
      return (
        <Tooltip
          prefixCls="rc-slider-tooltip"
          overlay={value}
          visible={true}
          placement="bottom"
          key={index}
        >
          <Handle value={value} {...restProps} />
        </Tooltip>
      );
    };
    return (
      <Page className="section" backgroundImage={`url(${bg2})`}>
        <Box
          id="latentOverlay"
          bg="#cdb7ddff"
          textAlign="center"
          mx={5}
          p={3}
          borderRadius={4}
        >
          <Flex flexWrap="wrap">
            <Box width={1 / 3}>
              <Box mx={2}>
                <Box mx={1}>
                  <Chip>Cat category</Chip>
                  <P color="primary">Choose the cat category</P>
                  <Select
                    value={this.state.catClass}
                    bg="secondary"
                    color="#609"
                    sx={{ color: "primary" }}
                    onChange={e => {
                      this.setState({ catClass: e.target.value });
                    }}
                  >
                    {Object.entries(catClasses).map(([name, index]) => {
                      return <option key={index}>{name}</option>;
                    })}
                  </Select>
                </Box>
              </Box>
              <Box my={3} width={1}>
                <Image
                  src={this.getImage(catClasses[this.state.catClass])}
                  sx={{
                    border: "5px solid #609",
                    width: ["100%", "50%"],
                    borderRadius: 9999
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
                    border: "5px solid #609",
                    borderRadius: 9999
                  }}
                ></Image>
              </Box>
              <Box p={3}>
                <SliderWithTooltip
                  railStyle={{
                    backgroundColor: "rgba(149, 20, 199, 0.8)",
                    height: 5
                  }}
                  trackStyle={{
                    backgroundColor: "rgba(149, 20, 199, 0.8)",
                    height: 5
                  }}
                  handleStyle={{
                    borderColor: "rgba(149, 20, 199, 0.8)",
                    border: "0px",
                    height: 28,
                    width: 28,
                    marginTop: -14,
                    backgroundColor: "rgba(149, 20, 199, 1.0)"
                  }}
                  step={0.2}
                  defaultValue={0.5}
                  handle={handle}
                  min={0.1}
                  max={0.9}
                  tipFormatter={value => `Weight: ${value}`}
                  tipProps={{ placement: "bottom" }}
                  onChange={v => this.setState({ weight: v })}
                />
              </Box>
            </Box>

            <Box width={[1 / 3]}>
              <Box mx={1}>
                <Chip>Dog category</Chip>
                <P color="primary">Choose the dog category</P>
                <Select
                  value={this.state.dogClass}
                  bg="secondary"
                  color="#609"
                  onChange={e => {
                    this.setState({ dogClass: e.target.value });
                  }}
                >
                  {Object.entries(dogClasses).map(([name, index]) => {
                    return <option key={index}>{name}</option>;
                  })}
                </Select>
              </Box>
              <Box my={3} width={1}>
                <Image
                  src={this.getImage(dogClasses[this.state.dogClass])}
                  sx={{
                    width: ["100%", "50%"],
                    border: "5px solid #609",
                    borderRadius: 9999
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
