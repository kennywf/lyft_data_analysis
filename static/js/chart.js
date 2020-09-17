// Load data from hours-of-tv-watched.csv
d3.csv("data/lyft_sep5_2014_final.csv").then(function(lyftData) {
    lyftData.forEach(function(data) {
    data.hour = +data.hour
    data.hour_grouping = data.hour_grouping;
console.log(data.hour)

plotData = [{
    x: [data.hour],
    y: [data.hour]}];

Plotly.newPlot("plot", plotData);
})

})
