d3.csv('./bubble chart compare', function(data) {


    var w = 800;
    var h = 300;

    var svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
            return d.frequency;
        })
        .attr("cy", function(d) {
            return d.nearby;
        })
        .attr("r", function(d) {
            return Math.sqrt(h - d[1]);
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