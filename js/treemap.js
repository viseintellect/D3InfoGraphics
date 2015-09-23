/**
 * Created by prasadkochikarpai on 9/23/15.
 */

var color = d3.scale.category10();

var canvas = d3.select("body").append("svg")
.attr("width", 500)
.attr("height", 500);

d3.json("data/mydata.json", function(data){

    var treemap = d3.layout.treemap()
        .size([500, 500])
        .nodes(data);

    var cells = canvas.selectAll(".cell")
        .data(treemap)
        .enter()
        .append("g")
        .attr("class", "cell");

    cells.append("rect")
        .attr("x", function(d){ return d.x; })
        .attr("y", function(d){ return d.y; })
        .attr("width", function(d){ return d.dx; })
        .attr("height", function(d){ return d.dy; })
        .attr("fill", function(d){ return d.children ? null : color(d.parent.name)})
        .attr("stroke", "#fff");

    cells.append("text")
        .attr("x", function(d){
            return d.x + d.dx/2;
        })
        .attr("y", function(d){
            return d.y + d.dy/2;
        })
        .attr("text-anchor", "middle")
        .text(function(d){
            return d.children ? null : d.name;
        });

});