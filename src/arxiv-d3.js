import d3 from "d3";

var node = document.createElement("div");

const width = 960;
const height = 400;
const margin = { top: 10, bottom: 30, left: 10, right: 100 };

const svg = d3
  .select(node)
  .append("svg")
  .attr("width", width)
  .attr("height", height);
const chartSvg = svg
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

const categorysSvg = svg
  .append("g")
  .attr("transform", `translate(${width - margin.right + 10}, ${margin.top})`);

d3.json("./arxiv-data-cleaned.json").then(arxivData => {
  let categorys = [];

  arxivData.forEach(function(data) {
    const term = data.category.term;
    !categorys.includes(term) && categorys.push(term);
  });

  categorys.reverse();
  const categoryLen = categorys.length;

  const colorsXscale = d3
    .scaleOrdinal()
    .domain(categorys)
    .range(d3.range(0, 1, 1 / categoryLen));
  const colors = d => d3.interpolateRainbow(colorsXscale(d));

  const xHeight = width - margin.left - margin.right;
  const xScale = d3
    .scaleLinear()
    .domain(
      d3.extent(arxivData, function(d) {
        return formatTimeToUnix(d.published);
      })
    )
    .range([0, xHeight]);
  const xAxis = g =>
    g
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y-%m")));

  const yHeight = height - margin.bottom;
  const yScale = d3
    .scaleOrdinal()
    .domain(categorys)
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
    .data(arxivData)
    .enter()
    .append("circle")
    .style("cursor", "pointer")
    .attr("cx", function(d) {
      return xScale(formatTimeToUnix(d.published));
    })
    .attr("cy", function(d) {
      return yScale(d.category.term);
    })
    .attr("r", 3)
    .attr("fill", function(d, i) {
      return colors(d.category.term);
    })
    .on("mouseover", function(d) {
      d3.select(this).attr("r", 10);

      const html = `<p><span>Title:</span> ${d.title}</p>
        <p><span>Authors:</span> ${d.authors.join(",")}</p>
        <p><span>Published:</span> ${d3.timeFormat("%Y-%m-%d %H:%M:%S")(
          formatTimeToUnix(d.published)
        )}</p>
        `;
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
    .data(categorys)
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
    .style("cursor", "pointer")
    .on("mouseover", function(d) {
      tooltip.html(d);
      tooltip
        .style("left", `${d3.event.pageX + 10}px`)
        .style("top", `${d3.event.pageY + 10}px`)
        .style("display", "block");
    })
    .on("mouseout", function(d) {
      tooltip.style("display", "none");
    });
});

function formatTimeToUnix(time) {
  const timeFormat = d3.timeFormat("%Q");
  const parseTime = d3.utcParse("%Y-%m-%dT%H:%M:%SZ");
  return Number(timeFormat(parseTime(time)));
}

export default node;
