import * as React from "react";
import { Box, Flex } from "reflexbox";
import * as d3 from "d3";
import { H1, P, Page } from "./Util";
import "./d3.css";
import Emoji from "react-emoji-render";

function formatTimeToUnix(time) {
  const parseTime = d3.utcParse("%Y-%m-%d");
  return parseTime(time);
}

const cat_strings = {
  "cs.SI": "Social and Information Networks",
  "cs.CY": "Computers and Society",
  "cs.DB": "Databases",
  "cs.DC": "Distributed, Parallel, and Cluster Computing",
  "cs.HC": "Human-Computer Interaction",
  "q-bio.GN": "Genomics",
  "q-bio.NC": "Neurons and Cognition",
  "q-bio.BM": "Biomolecules",
  "cs.RO": "Robotics",
  "cs.IT": "Information Theory",
  "cs.NI": "Networking and Internet Architecture",
  "cs.SD": "Sound",
  "cs.CR": "Cryptography and Security",
  "eess.AS": "Audio and Speech Processing",
  "cs.GR": "Graphics",
  "cs.IR": "Information Retrieval",
  "hep-ex": "High Energy Physics - Experiment",
  "cs.MM": "Multimedia",
  "cs.CL": "Computation and Language",
  "cs.AI": "Artificial Intelligence",
  "cs.NE": "Neural and Evolutionary Computation",
  "cs.CV": "Computer Vision and Pattern Recognition",
  "cs.LG": "CS.Machine Learning",
  "stat.ML": "STAT.Machine Learning"
};

export default class ArXiv extends React.Component {
  componentDidMount() {
    const data = require("./data/gans.json");
    this.chart(data);
  }
  chart(gansData) {
    const width = 960;
    const height = 400;
    const margin = { top: 3, bottom: 50, left: 10, right: 250 };

    const svg = d3
      .select(this.refs.canvas)
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`);
    const chartSvg = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const categorysSvg = svg
      .append("g")
      .attr(
        "transform",
        `translate(${width - margin.right + 10}, ${margin.top})`
      );

    let categories = [];

    gansData.forEach(function(data) {
      const term = data.category.term;
      data.date = `${data.year}-${data.month}-${data.day}`;
      !categories.includes(term) && categories.push(term);
    });

    categories.reverse();
    const categoryLen = categories.length;

    const colorsXscale = d3
      .scaleOrdinal()
      .domain(categories)
      .range(d3.range(0, 1, 1 / categoryLen));
    const colors = d => d3.interpolateRainbow(colorsXscale(d));

    const xHeight = width - margin.left - margin.right;
    const xScale = d3
      .scaleLinear()
      .domain(
        d3.extent(gansData, function(d) {
          return formatTimeToUnix(d.date);
        })
      )
      .range([0, xHeight]);
    const xAxis = g =>
      g
        .attr("transform", `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y-%m")))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

    const yHeight = height - margin.bottom;
    const yScale = d3
      .scaleOrdinal()
      .domain(categories)
      .range(d3.range(0, yHeight, yHeight / categoryLen));
    const yAxis = g => g.call(d3.axisLeft(yScale));

    chartSvg.append("g").call(xAxis);

    chartSvg
      .append("g")
      .style("visibility", "hidden")
      .call(yAxis);

    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("display", "none");

    chartSvg
      .selectAll("circle")
      .data(gansData)
      .enter()
      .append("circle")
      .attr("cx", function(d) {
        return xScale(formatTimeToUnix(d.date));
      })
      .attr("cy", function(d) {
        return yScale(d.category.term);
      })
      .attr("r", 3)
      .attr("fill", function(d, i) {
        return colors(d.category.term);
      })
      .on("click", function(d, i) {
        window.open(d.arxiv);
      })
      .on("mouseover", function(d) {
        d3.select(this).attr("r", 10);

        const html = `<p><span>Title:</span> ${d.title}</p>
          <p><span>Authors:</span> ${d.authors.join(",")}</p>
          <p><span>Published:</span> ${d3.timeFormat("%Y-%m-%d")(
            formatTimeToUnix(d.date)
          )}</p>`;
        tooltip.html(html);
        tooltip
          .style("left", `${d3.event.pageX + 10}px`)
          .style("top", `${d3.event.pageY + 10}px`)
          .style("display", "block");
      })
      .on("mouseout", function(d) {
        d3.select(this).attr("r", 3);

        tooltip.style("display", "none");
      });

    const categoryG = categorysSvg
      .selectAll("g")
      .data(categories.map(c => cat_strings[c]))
      .enter()
      .append("g");

    categoryG
      .append("rect")
      .attr("x", function(d, i) {
        return 0;
      })
      .attr("y", function(d, i) {
        return (yHeight / categoryLen) * i;
      })
      .attr("width", function(d) {
        return 10;
      })
      .attr("height", yHeight / categoryLen)
      .attr("fill", function(d) {
        return colors(d);
      })
      .style("cursor", "pointer");

    categoryG
      .append("text")
      .attr("x", function(d, i) {
        return 15;
      })
      .attr("y", function(d, i) {
        return (yHeight / categoryLen) * (i + 1);
      })
      .text(function(d) {
        return d;
      })
      .attr("fill", "black")
      .attr("font-size", 10);
    //   .attr("font-family", "Open Sans");
  }
  render() {
    return (
      <Page bg="white" className="section">
        <H1 textAlign="center" color="primary">
          A Bit of GAN Development History <Emoji text=":book:"></Emoji> ...
        </H1>
        {/* <Image
          src={meme}
          width="150px"
          sx={{
            position: "absolute"
          }}
        ></Image> */}
        <Flex justifyContent="center">
          <Box m={2} width={3 / 4} ref="canvas"></Box>
        </Flex>
        <P m={4} color="primary" fontSize={3}>
          Ian Goodfellow is recognized <star /> by several sources as having
          invented GANs in 2014. This paper included the first working
          implementation of a generative model based on adversarial networks.
          From then on, more and more researchers in the field of ML / CV are
          expanding and improving the work of GAN, and researchers from broader
          domains are also coming into this GAN playground. In a 2016 seminar,
          Yann LeCun described GANs as{" "}
          <i>
            "the coolest idea in machine learning in the last twenty years".
          </i>
        </P>
      </Page>
    );
  }
}
