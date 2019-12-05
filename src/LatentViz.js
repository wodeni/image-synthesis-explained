import * as React from "react";
import { Box, Flex } from "reflexbox";
import * as d3 from "d3";
import { TransparentBox, Cat, Dog, H1, P, Page } from "./Util";
import "./d3.css";
import { Image } from "rebass";
import Emoji from "react-emoji-render";

export default class LatentViz extends React.Component {
  componentDidMount() {
    const data = require("./data/combined-pca.csv");
    this.chart(this.refs.canvas, data, false);
    this.chart(this.refs.canvas2, data, true);
  }

  chart(ref, data, useImage) {
    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3
      .select(ref)
      .append("svg")
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${height +
          margin.top +
          margin.bottom}`
      )
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var rowConverter = function(d, i) {
      return {
        x: parseFloat(d.x),
        y: parseFloat(d.y),
        i: i + 1
      };
    };
    d3.csv(data, rowConverter).then(function(data) {
      console.log(data);

      // Add X axis
      var x = d3
        .scaleLinear()
        .domain([-2.5, 2.5])
        .range([0, width]);
      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .attr("class", "axis");

      // Add Y axis
      var y = d3
        .scaleLinear()
        .domain([-2.5, 2.5])
        .range([height, 0]);
      svg
        .append("g")
        .call(d3.axisLeft(y))
        .attr("class", "axis");

      const tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("display", "none");

      // Add dots
      if (useImage) {
        svg
          .append("g")
          .selectAll("dot")
          .data(data)
          .enter()
          .append("svg:image")
          .attr("x", function(d) {
            return x(d.x);
          })
          .attr("y", function(d) {
            return y(d.y);
          })
          .attr("href", function(d) {
            const url = require(`./assets/walk/walk-153-${d.i}.png`);
            return url;
          })
          .on("mouseover", function(d) {
            d3.select(this).attr("width", 100);
            d3.select(this).attr("height", 100);
            d3.select(this).raise();
          })
          .on("mouseout", function(d) {
            d3.select(this).attr("width", 20);
            d3.select(this).attr("height", 20);
            d3.select(this).lower();
          })
          .attr("width", 20)
          .attr("height", 20);
      } else {
        svg
          .append("g")
          .selectAll("dot")
          .data(data)
          .enter()
          .append("circle")
          .attr("cx", function(d) {
            return x(d.x);
          })
          .attr("cy", function(d) {
            return y(d.y);
          })
          .attr("r", 1.5)
          .style("fill", "white");
      }
    });
  }

  render() {
    return (
      <Page bg="primary" className="section">
        {/* <H1 textAlign="center" color="primary">
          A Bit of GAN Development History <Emoji text=":book:"></Emoji> ...
        </H1> */}
        <P m={4} color="primary" fontSize={3}>
          TODO
        </P>
        <Flex justifyContent="center">
          <Box m={2} width={1 / 2} ref="canvas"></Box>
          <Box m={2} width={1 / 2} ref="canvas2"></Box>
        </Flex>
      </Page>
    );
  }
}
