Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: [ '#e987cf','#67E863']
})
Highcharts.chart('container', {
    chart: {
        type: 'column',
        zoomType: 'y',
        //backgroundColor:"#FBFAE4"
    },
    title: {
        text: 'Top 5 population of Europe by gender in 2016'
    },
    subtitle: {
        text: 'Source: <a href="https://www.statista.com/statistics/611318/population-of-europe-by-country-and-gender/">statista.com</a>'
    },
    xAxis: {
        categories: [
            'Germany',
            'France',
            'UK',
            'Italy',
            'Spain'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px"><b>{point.key}</b></span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Female',
        data: [41661561, 34419934, 33158027, 31209230, 23632635]

    }, {
        name: 'Male',
        data: [40514123, 32340016, 32224529, 29456321, 22807464]

    }]
});