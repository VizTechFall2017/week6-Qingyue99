var margin = {top: 30, right: 15, bottom: 80, left: 60}
    outerWidth = 1100,
        outerHeight = 700,
    width = 1100 - margin.left - margin.right
    height = 700 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .domain([0,6])
    .range([ 0, width ]);

var y = d3.scale.linear()
    .domain([0, 6])
    .range([ height, 0 ]);

var xValue = "frequency",
        yValue = "nearby",
        rValue = "gather(g)",
        colorValue = "Manufacturer";


d3.csv("bubble chart compare", function(data) {
    data.forEach(function(d) {

var svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d)
            {return (d.frequency)*0.7;})
        .attr("cy", function(d)
            {return (d.nearby)*0.7;})
        .attr("r", function(d)
{return Math.sqrt(h - d[1]);
        });
    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text(function(d) {
            return d.frequency + "," + d.nearby;
        })
        .attr("x", function(d) {
            return d.frequency;
        })
        .attr("y", function(d) {
            return d.nearby;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "12px")
        .attr("fill", "red");


});
