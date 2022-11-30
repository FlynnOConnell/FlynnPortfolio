//@ts-nocheck
import { AppendingLineChart } from './linechart';
import * as d3 from 'd3';

let mainWidth;

function scrollTween(offset) {
    return function () {
        let i = d3.interpolateNumber(
            window.pageYOffset || document.documentElement.scrollTop,
            offset
        );
        return function (t) {
            scrollTo(0, i(t));
        };
    };
}

// More scrolling
d3.select('.more button').on('click', function () {
    let position = 800;
    d3.transition().duration(1000).tween('scroll', scrollTween(position));
});

let lineChart = new AppendingLineChart(d3.select('#linechart'), [
    '#777',
    'black',
]);

function updateSVG() {
    const width = svg.node().getBoundingClientRect().width;
    const height = svg.node().getBoundingClientRect().height;
    svg.attr('viewBox', `0 0 ${width} ${height}`);
    svg.attr('width', width);
    svg.attr('height', height);
    mainWidth = width;
    lineChart.addDataPoint([lossTrain, lossTest]);
}
