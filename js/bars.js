/**
 * Created by prasadkochikarpai on 9/22/15.
 */

var dataArray = [20, 40, 50, 60];
var width = 500;
var height = 500;

var widthScale = d3.scale.linear()
    .domain([0, 60])
    .range([0, width]);

var color = d3.scale.linear()
    .domain([0, 60])
    .range(["red", "blue"])

var axis = d3.svg.axis()
    .ticks(5)
    .scale(widthScale);

var canvas = d3.select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .append("g")
    .attr("transform", "translate(20, 0)");


var bars = canvas.selectAll("rect")
    .data(dataArray)
    .enter()
    .append("rect")
    .attr("width", function(d){
        return widthScale(d);
    })
    .attr("height", 50)
    .attr("fill", function (d) {
        return color(d);
    })
    .attr("y", function(d, i){
        return i*100;
    });

canvas.append("g")
    .attr("transform", "translate(0, 400)")
    .call(axis);