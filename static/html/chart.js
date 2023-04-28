function showChart(chartId) {
    alert();
    // Hide all charts
    var chartContainers = document.getElementsByClassName('chart-container');
    for (var i = 0; i < chartContainers.length; i++) {
        chartContainers[i].style.display = 'none';
    }

    // Show the clicked chart
    var chart = document.getElementById(chartId);
    chart.style.display = 'block';
}
