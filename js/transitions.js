/**
 * Created by prasadkochikarpai on 9/22/15.
 */

var canvas = d3.select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);


var circle = canvas.append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 25);

circle.transition()
    .duration(1500)
    .delay(2000)
    .attr("cx", 150)
    .transition()
    .attr("cy", 200)
    .transition()
    .attr("cx", 25)
    .each("start", function(){
        d3.select(this).attr("fill", "red");
    });