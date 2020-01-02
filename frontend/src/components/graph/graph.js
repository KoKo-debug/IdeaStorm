import React from 'react';
import * as d3 from 'd3';

import './graph.css';

class Graph extends React.Component {

    componentDidMount() {

        const data = {
            nodes: [
                { name: 'Cafe', id: '0', type: 'main' },
                { name: 'Location', id: '1', type: 'sub' },
                { name: 'Size', id: '2', type: 'sub' },
                { name: 'Customer', id: '3', type: 'sub' },
                { name: 'Merchandise', id: '4', type: 'sub' },
                { name: 'F', id: '5', type: 'idea' },
                { name: 'G', id: '6', type: 'idea' },
                { name: 'H', id: '7', type: 'idea' },
                { name: 'I', id: '8', type: 'idea' },
            ],
            links : [
                { source: '0', target: '2', type:'main-sub' },
                { source: '0', target: '1', type:'main-sub' },
                { source: '0', target: '3', type:'main-sub' },
                { source: '0', target: '4', type:'main-sub' },
                { source: '2', target: '5' },
                { source: '2', target: '6' },
                { source: '2', target: '7' },
                { source: '3', target: '8' },
                // { source: '1', target: '6' },
                // { source: '3', target: '4' },
                // { source: '3', target: '7' },
                // { source: '4', target: '5' },
                // { source: '4', target: '7' },
                // { source: '4', target: '8' },
            ]
        };

        const width = window.innerWidth;
        const height = 600;

        //Initializing chart
        const chart = d3.select('.chart')
            .attr('width', width)
            .attr('height', height);

        //Creating tooltip
        const tooltip = d3.select('.board-container')
            .append('div')
            .attr('class', 'tooltip')
            .html('Tooltip')
            .style('opacity', 0);

        //Initializing force simulation
        const simulation = d3.forceSimulation()
            .force('link', d3.forceLink().id( d => d.id ).distance(d => {
                console.log(d.type)
                if (d.type === 'main-sub') { return 200 }
                else { return 100 }
            }).strength(0.1))
            .force('charge', d3.forceManyBody().strength(-100))
            .force('collide', d3.forceCollide())
            .force('center', d3.forceCenter(width / 2, height / 2));


        //Drag functions
        const dragStart = d => {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        };

        const drag = d => {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        };

        const dragEnd = d => {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        //Creating links
        const link = chart.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(data.links).enter()
            .append('line');

        //Creating nodes
        const node = chart.append('g')
            .attr('class', 'nodes')
            .selectAll('g')
            .data(data.nodes).enter()
            .append('g')

        node.append('circle')
            .attr('r', function (d, i) {
                if (d.type === "main") { return 60; } 
                else if (d.type === "sub") { return 40; }
                else { return 20;}
            })
            .attr('fill', function (d, i) {
                if (d.type === "main") { return 'white'; } 
                else if (d.type === 'sub' ) { return 'orange'; }
                else { return '#00ffea'; }
            })
            .attr('strokewidth', function (d, i) {
                if (i > 0) {
                    return '0';
                } else {
                    return '2';
                }
            })
            .attr('stroke', function (d, i) {
                if (i > 0) {
                    return '';
                } else {
                    return 'black';
                }
            })
            .call(d3.drag()
                .on('start', dragStart)
                .on('drag', drag)
                .on('end', dragEnd)
            )
            .on('mouseover', d => {
                tooltip.html(d.name)
                    .style('left', d3.event.pageX + 5 + 'px')
                    .style('top', d3.event.pageY + 5 + 'px')
                    .style('opacity', .9);
            }).on('mouseout', () => {
                tooltip.style('opacity', 0)
                    .style('left', '0px')
                    .style('top', '0px');
            }).on('click', d =>  {
                window.location.href = "/#/storms";
            });

        node.append('text')
            .text(d => { return d.name; })
            .attr('font-family', 'Raleway', 'Helvetica Neue, Helvetica')
            .attr('fill', function (d, i) {
                if ( d.type === "main" ) {
                    return "black";
                } else {
                    return "darkblue";
                }
            })
            .attr('text-anchor', function (d, i) {
                return 'middle';
            })
            .attr('font-size', function (d, i) {
                if (i > 0) {
                    return '.5em';
                } else {
                    return '.9em';
                }
            })

        //Setting location when ticked
        const ticked = () => {
            link
                .attr("x1", d => { return d.source.x; })
                .attr("y1", d => { return d.source.y; })
                .attr("x2", d => { return d.target.x; })
                .attr("y2", d => { return d.target.y; });

            node
                .attr("transform", d => {
                    return "translate(" + d.x + "," + d.y + ")";
                })
        };

        //Starting simulation
        simulation.nodes(data.nodes)
            .on('tick', ticked);

        simulation.force('link')
            .links(data.links);
    }

    render() {
        return (
            <div className="board-container">
                <div className="chart-container">
                    <svg className="chart">
                    </svg>
                </div>
            </div>
        )
    }
}

export default Graph;