/**
 * Created by prasadkochikarpai on 9/23/15.
 */

var width = 760;
var height = 760;

var canvas = d3.select("body").append("svg")
.attr("width", width)
.attr("height", height);

d3.json("data/karnataka.geojson", function(data){

    var group = canvas.selectAll("g")
        .data(data.features)
        .enter()
        .append("g")
        .attr("transform", "rotate(90," + width/2 + "," +  height/2 + ")");

    var projection = d3.geo.albers().scale(1).translate([0, 0]);
    var path = d3.geo.path().projection(projection);

    var b = path.bounds(data),
        s = .95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
        t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

    projection
        .scale(s)
        .translate(t);

    var areas = group.append("path")
        .attr("d", path)
        .attr("class", "area")
        .attr("fill", "steelblue");

    group.append("text")
        .attr("x", function(d){
            return path.centroid(d)[0];
        })
        .attr("y", function(d){
            return path.centroid(d)[1];
        })
        .attr("text-anchor", "middle")
        .text(function(d){
            return d.properties.NAME_2;
        })
        .attr("transform", function(d){
            return "rotate(-90," + path.centroid(d)[0] + "," +  path.centroid(d)[1] + ")";
        });
});

