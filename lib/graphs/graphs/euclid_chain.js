var chainmyChart = echarts.init(document.getElementById("blg4"));

var chaingadgetoption3d1 = generateOptions(["3-sets"], false, chaingadgetseries, 
    {
        alpha: 90,
        beta: 0,
        distance: 10,
        minDistance: 0,
        maxDistance: 400,
        center: [-12, 0, 0]
    })
var chaingadgetoption3d2 = generateOptions(["3-sets"], false, chaingadgetseries2, 
    {
        alpha: 90,
        beta: 0,
        distance: 10,
        minDistance: 0,
        maxDistance: 400,
        center: [-12, 0, 0]
    })
    var chaingadgetoption3d3 = generateOptions(["3-sets"], true, chaingadgetseries2, 
        {
            alpha: 0,
            beta: 0,
            distance: 10,
            minDistance: 0,
            maxDistance: 400,
            center: [-12, -10, 5]
        });

chainmyChart.setOption(chaingadgetoption3d1);


var echartEventHandler = function(event) {
    if(event.fragment.id === undefined) {
  
    }
    else if (event.fragment.id == 'blg1-8') {
        chainmyChart.setOption(chaingadgetoption3d2);
    }
    else if (event.fragment.id == 'blg1-9') {
        chainmyChart.setOption(chaingadgetoption3d3);
    }
  }
  
  Reveal.addEventListener('fragmentshown', echartEventHandler);
  
  var echartEventHandlerBack = function(event) {
    if(event.fragment.id === undefined) {
  
    }
    else if (event.fragment.id == 'blg1-8') {
        chainmyChart.setOption({}, true);
        chainmyChart.setOption(chaingadgetoption3d1);
    }
    else if (event.fragment.id == 'blg1-9') {
        chainmyChart.setOption(chaingadgetoption3d2);
    }
  }
  
  
  Reveal.addEventListener('fragmenthidden', echartEventHandlerBack);
  