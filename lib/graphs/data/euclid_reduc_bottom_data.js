// ////////////////////////////////////////////////////////////////////////////////////////
// graph 1
// ////////////////////////////////////////////////////////////////////////////////////////

var series = []

var agentnodes = [
    [3.3 + 7.5, 0, 0, '1'],    // 0        u1
    [0 + 7.5, -7.5, 0, '2'],  // 1        u2
    [10 + 7.5, 2.5, 0, '3'], // 2        u3
    [3.3 + 7.5, -5, 0, '4'],    // 3        u4
    [6.6 + 7.5, -2.5, 0, '5'],   // 4        u5
    [10 + 7.5, -7.5, 0, '6']   // 5        u6
];

var agentnodeslabelpos = [
    'top',
    'left',
    'right',
    'left',
    'left',
    'right'
]

series = series.concat(createNodeSeries("agents", "scatter3D", agentnodes, 7, 'grey', agentnodeslabelpos, true));

var setnodes = [
    [0 + 7.5, 2.5, 0, 'C₁'], // 6       w1_1
    [3.3 + 7.5, -2.5, 0, 'C₂'],  // 7       w2_1
    [6.6 + 7.5, 0, 0, 'C₃'],     // 8       w3_1
    [3.3 + 7.5, -7.5, 0, 'C₄'],  // 9       w4_2
    [10 + 7.5, -2.5, 0, 'C₅'],  // 10      w5_3
    [6.6 + 7.5, -5, 0, 'C₆'],     // 11      w6_4


    [0 + 7.5, 2.5, 0, ''], // 12      w1_2
    [3.3 + 7.5, -2.5, 0, ''],  // 13      w2_2
    [6.6 + 7.5, 0, 0, ''],     // 14      w3_3
    [3.3 + 7.5, -7.5, 0, ''],  // 15      w4_4
    [10 + 7.5, -2.5, 0, ''],  // 16      w5_5
    [6.6 + 7.5, -5, 0, ''],     // 17      w6_5


    [0 + 7.5, 2.5, 0, ''], // 18      w1_3
    [3.3 + 7.5, -2.5, 0, ''],  // 19      w2_4
    [6.6 + 7.5, 0, 0, ''],     // 20      w3_5
    [3.3 + 7.5, -7.5, 0, ''],  // 21      w4_6
    [10 + 7.5, -2.5, 0, ''],  // 22      w5_6
    [6.6 + 7.5, -5, 0, '']      // 23      w6_6
];

var setnodeslabelpos = [
    'left',
    'left',
    'top',
    'bottom',
    'right',
    'bottom',


    'left',
    'left',
    'top',
    'bottom',
    'right',
    'bottom',


    'left',
    'left',
    'top',
    'bottom',
    'right',
    'bottom'
]

series = series.concat(createNodeSeries("3-sets", "scatter3D", setnodes, 7, 'orange', setnodeslabelpos, true));

var bendnodes = [
    [3.3 + 7.5, 0, 0, 'b_1^2'],    // 12 -> 24    b_1^2
    [6.6 + 7.5, -2.5, 0, 'b_5^6'],   // 13 -> 25    b_5^6
    [10 + 7.5, 2.5, 0, 'b_3^5'], // 14 -> 26    b_3^5
    [3.3 + 7.5, 0, 0, 'b_1^3'],    // 15 -> 27    b_1^3
    [6.6 + 7.5, -2.5, 0, 'b_5^3']    // 16 -> 28    b_5^3
];

var setbendlabelpos = [
    'left',
    'left',
    'top',
    'bottom',
    'right'
]

series = series.concat(createNodeSeries("bend points", "scatter3D", bendnodes, 0, 'red', setbendlabelpos, false));

var edges = [
    { source: 6, target: 0 },
    { source: 12, target: 1 },
    { source: 18, target: 2 },

    { source: 7, target: 24 },
    { source: 24, target: 0 },
    { source: 13, target: 1 },
    { source: 19, target: 3 },

    { source: 8, target: 27 },
    { source: 27, target: 0 },
    { source: 14, target: 2 },
    { source: 20, target: 28 },
    { source: 28, target: 4 },

    { source: 9, target: 1 },
    { source: 15, target: 3 },
    { source: 21, target: 5 },

    { source: 10, target: 26 },
    { source: 26, target: 2 },
    { source: 16, target: 4 },
    { source: 22, target: 5 },

    { source: 11, target: 3 },
    { source: 17, target: 25 },
    { source: 25, target: 4 },
    { source: 23, target: 5 }
];

var nodes = agentnodes.concat(setnodes).concat(bendnodes);
series = series.concat(createEdgeSeries(nodes, edges))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// graph 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var series2 = []
series2 = series2.concat(createNodeSeries("agents", "scatter3D", agentnodes, 7, 'grey', agentnodeslabelpos, false));
series2 = series2.concat(createNodeSeries("3-sets", "scatter3D", setnodes, 7, 'orange', setnodeslabelpos, false));
series2 = series2.concat(createNodeSeries("bend points", "scatter3D", bendnodes, 0, 'red', setbendlabelpos, false));
series2 = series2.concat(createEdgeSeries(nodes, edges))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// graph 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var series3 = []

var agentnodes3 = [
    [0, -5, 0, '1'],    // 0        u1
    [5, 0, 0, '2'],    // 1        u2
    [10, -5, 0, '3'],   // 2        u3
    [10, 5, 0, '4'],   // 3        u4
    [25, 0, 0, '5'],    // 4        u5
    [15, 0, 0, '6']    // 5        u6
];

var agentnodeslabelpos3 = [
    'left',
    'left',
    'top',
    'top',
    'right',
    'bottom'
]

series3 = series3.concat(createNodeSeries("agents", "scatter3D", agentnodes3, 7, 'grey', agentnodeslabelpos3, false));

var setnodes3 = [
    [5, -5, 0, 'C₁'],          // 6       w1_1
    [5, 5, 0, 'C₂'],          // 7       w2_1
    [10, -10, 0, 'C₃'],    // 8       w3_1
    [10, 0, 0, 'C₄'],     // 9       w4_2
    [20, 0, 0, 'C₅'],      // 10      w5_3
    [15, 5, 0, 'C₆'],         // 11      w6_4


    [5, -5, 0, ''],          // 12      w1_2
    [5, 5, 0, ''],          // 13      w2_2
    [10, -10, 0, ''],    // 14      w3_3
    [10, 0, 0, ''],     // 15      w4_4
    [20, 0, 0, ''],      // 16      w5_5
    [15, 5, 0, ''],         // 17      w6_5


    [5, -5, 0, ''],          // 18      w1_3
    [5, 5, 0, ''],          // 19      w2_4
    [10, -10, 0, ''],    // 20      w3_5
    [10, 0, 0, ''],     // 21      w4_6
    [20, 0, 0, ''],      // 22      w5_6
    [15, 5, 0, '']          // 23      w6_6
];

var setnodeslabelpos3 = [
    'bottom',
    'top',
    'bottom',
    'bottom',
    'top',
    'top',


    'bottom',
    'top',
    'bottom',
    'bottom',
    'top',
    'top',


    'bottom',
    'top',
    'bottom',
    'bottom',
    'top',
    'top'
]

series3 = series3.concat(createNodeSeries("3-sets", "scatter3D", setnodes3, 7, 'orange', setnodeslabelpos3, false));

var bendnodes3 = [
    [0, 5, 0, 'b_1^2'],     // 12 -> 24    b_1^2
    [25, 5, 0, 'b_5^6'],     // 13 -> 25    b_5^6
    [20, -5, 0, 'b_3^5'],     // 14 -> 26    b_3^5
    [0, -10, 0, 'b_1^3'],     // 15 -> 27    b_1^3
    [25, -10, 0, 'b_5^3']      // 16 -> 28    b_5^3
];

var setbendlabelpos3 = [
    'left',
    'left',
    'top',
    'bottom',
    'right'
]

series3 = series3.concat(createNodeSeries("bend points", "scatter3D", bendnodes3, 0, 'red', setbendlabelpos3, false));


var nodes3 = agentnodes3.concat(setnodes3).concat(bendnodes3);
series3 = series3.concat(createEdgeSeries(nodes3, edges))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// graph 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var series4 = []

series4 = series4.concat(createNodeSeries("agents", "scatter3D", agentnodes3, 7, 'grey', agentnodeslabelpos3, true));
series4 = series4.concat(createNodeSeries("3-sets", "scatter3D", setnodes3, 7, 'orange', setnodeslabelpos3, true));
series4 = series4.concat(createNodeSeries("bend points", "scatter3D", bendnodes3, 0, 'red', setbendlabelpos3, false));
series4 = series4.concat(createEdgeSeries(nodes3, edges))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// graph 5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var series5 = []

series5 = series5.concat(createNodeSeries("agents", "scatter3D", agentnodes3, 7, 'grey', agentnodeslabelpos3, true));
series5 = series5.concat(createNodeSeries("3-sets", "scatter3D", setnodes3, 7, 'orange', setnodeslabelpos3, false));
series5 = series5.concat(createNodeSeries("bend points", "scatter3D", bendnodes3, 0, 'red', setbendlabelpos3, false));
series5 = series5.concat(createEdgeSeries(nodes3, edges))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// graph 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var series6 = []

var agentnodes6 = [
    [0, -5, 0, '1'],    // 0        u1
    [5, 0, 0, '2'],    // 1        u2
    [10, -5, 0, '3'],   // 2        u3
    [10, 5, 0, '4'],   // 3        u4
    [25, 0, 0, '5'],    // 4        u5
    [15, 0, 0, '6']    // 5        u6
];

series6 = series6.concat(createNodeSeries("agents", "scatter3D", agentnodes6, 7, 'grey', agentnodeslabelpos3, true));

var setnodes6 = [
    [5 - 0.2, -5, 0, 'C₁'],          // 6       w1_1
    [5 - 0.2, 5, 0, 'C₂'],          // 7       w2_1
    [10 - 0.2, -10, 0, 'C₃'],    // 8       w3_1
    [10 - 0.2, 0, 0, 'C₄'],     // 9       w4_2
    [20, 0 - 0.35, 0, 'C₅'],      // 10      w5_3
    [15 - 0.2, 5, 0, 'C₆'],         // 11      w6_4


    [5, -5 + 0.35, 0, ''],          // 12      w1_2
    [5, 5 - 0.35, 0, ''],          // 13      w2_2
    [10, -10 + 0.35, 0, ''],    // 14      w3_3
    [10, 0 + 0.35, 0, ''],     // 15      w4_4
    [20 + 0.2, 0, 0, ''],      // 16      w5_5
    [15 + 0.2, 5, 0, ''],         // 17      w6_5


    [5 + 0.2, -5, 0, ''],          // 18      w1_3
    [5 + 0.2, 5, 0, ''],          // 19      w2_4
    [10 + 0.2, -10, 0, ''],    // 20      w3_5
    [10 + 0.2, 0, 0, ''],     // 21      w4_6
    [20 - 0.2, 0, 0, ''],      // 22      w5_6
    [15, 5 - 0.35, 0, '']          // 23      w6_6
];

var setnodeslabelpos6 = [
    'left',
    'left',
    'top',
    'bottom',
    'right',
    'bottom',


    'left',
    'left',
    'top',
    'bottom',
    'right',
    'bottom',


    'left',
    'left',
    'top',
    'bottom',
    'right',
    'bottom'
]

series6 = series6.concat(createNodeSeries("3-sets", "scatter3D", setnodes6, 7, 'orange', setnodeslabelpos3, true));

var bendnodes6 = [
    [0, 5, 0, 'b_1^2'],     // 12 -> 24    b_1^2
    [25, 5, 0, 'b_5^6'],     // 13 -> 25    b_5^6
    [20, -5, 0, 'b_3^5'],     // 14 -> 26    b_3^5
    [0, -10, 0, 'b_1^3'],     // 15 -> 27    b_1^3
    [25, -10, 0, 'b_5^3']      // 16 -> 28    b_5^3
];

series6 = series6.concat(createNodeSeries("bend points", "scatter3D", bendnodes6, 0, 'red', [], false));

var nodes6 = agentnodes6.concat(setnodes6).concat(bendnodes6);
series6 = series6.concat(createEdgeSeries(nodes6, edges))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// graph 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var series7 = []

series7 = series7.concat(createNodeSeries("agents", "scatter3D", agentnodes6, 7, 'grey', agentnodeslabelpos3, true));
series7 = series7.concat(createNodeSeries("3-sets", "scatter3D", setnodes6, 7, 'orange', setnodeslabelpos3, true));
series7 = series7.concat(createNodeSeries("bend points", "scatter3D", bendnodes6, 7, 'red', [], false));

series7 = series7.concat(createEdgeSeries(nodes6, edges))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// graph 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var series8 = []

series8 = series8.concat(createNodeSeries("agents", "scatter3D", agentnodes6, 7, 'grey', agentnodeslabelpos3, true));
series8 = series8.concat(createNodeSeries("3-sets", "scatter3D", setnodes6, 7, 'orange', setnodeslabelpos3, true));
series8 = series8.concat(createNodeSeries("bend points", "scatter3D", bendnodes6, 7, 'red', [], false));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// graph 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var series9 = []

series9 = series9.concat(createNodeSeries("agents", "scatter3D", agentnodes6, 7, 'grey', agentnodeslabelpos3, true));
series9 = series9.concat(createNodeSeries("3-sets", "scatter3D", setnodes6, 7, 'orange', setnodeslabelpos3, true));
series9 = series9.concat(createNodeSeries("bend points", "scatter3D", bendnodes6, 7, 'red', [], false));

var chains = []

chains.push( 
[[2*(2.3/6),2*(-2.5+0.07)   , -0.125, ''],
[2*(2.3/6),2*(-2.5-0.07)    , -0.25, ''],
[2*(4.6/6),2*(-2.5)         , -0.375, ''],
[2*(6.9/6),2*(-2.5+0.07)    , -0.5, ''],
[2*(6.9/6),2*(-2.5-0.07)    , -0.5, ''],
[2*(9.2/6),2*(-2.5)         , -0.375, ''],
[2*(11.5/6),2*(-2.5+0.07)   , -0.25, ''],
[2*(11.5/6),2*(-2.5-0.07)   , -0.125, '']]);

chains.push(
[[2*(0+0.07), 2*(-2.5-2.5/6), 0, ''],
[2*(0-0.07), 2*(-2.5-2.5/6), 0, ''],
[2*(0), 2*(-2.5-5/6), 0, ''],
[2*(0+0.07), 2*(-2.5-7.5/6), 0, ''],
[2*(0-0.07), 2*(-2.5-7.5/6), 0, ''],
[2*(0), 2*(-2.5-10/6), 0, ''],
[2*(0+0.07), 2*(-2.5-12.5/6), 0, ''],
[2*(0-0.07), 2*(-2.5-12.5/6), 0, '']]);

chains.push(
[[2*(0+0.07), 2*(-2.5+5/10), 0, ''],
[2*(0-0.07), 2*(-2.5+5/10), 0, ''],
[2*(0), 2*(-2.5+10/10), 0, ''],
[2*(0+0.07), 2*(-2.5+15/10), 0, ''],
[2*(0-0.07), 2*(-2.5+15/10), 0, ''],
[2*(0), 2*(-2.5+20/10), 0, ''],
[2*(0+0.07), 2*(-2.5+25/10), 0, ''],
[2*(0-0.07), 2*(-2.5+25/10), 0, ''],
[2*(0), 2*(-2.5+30/10), 0, ''],
[2*(0+0.07), 2*(-2.5+35/10), 0, ''],
[2*(0-0.07), 2*(-2.5+35/10), 0, ''],
[2*(0), 2*(-2.5+40/10), 0, ''],
[2*(0+0.07), 2*(-2.5+45/10), 0, ''],
[2*(0-0.07), 2*(-2.5+45/10), 0, '']]);

chains.push(
[[2*(5-2.3/6), 2*(-2.5+0.07), 0, ''],
[2*(5-2.3/6), 2*(-2.5-0.07), 0, ''],
[2*(5-4.6/6), 2*(-2.5), 0, ''],
[2*(5-6.9/6), 2*(-2.5+0.07), 0, ''],
[2*(5-6.9/6), 2*(-2.5-0.07), 0, ''],
[2*(5-9.2/6), 2*(-2.5), 0, ''],
[2*(5-11.5/6), 2*(-2.5+0.07), 0, ''],
[2*(5-11.5/6), 2*(-2.5-0.07), 0, '']]);

chains.push(
[[2*(5+0.07), 2*(-2.5-2.15/6), 0, ''],
[2*(5-0.07), 2*(-2.5-2.15/6), 0, ''],
[2*(5), 2*(-2.5-4.3/6), 0, ''],
[2*(5+0.07), 2*(-2.5-6.45/6), 0, ''],
[2*(5-0.07), 2*(-2.5-6.45/6), 0, ''],
[2*(5), 2*(-2.5-8.6/6), 0, ''],
[2*(5+0.07), 2*(-2.5-10.75/6), 0, ''],
[2*(5-0.07), 2*(-2.5-10.75/6), 0, '']]);

chains.push(
[[2*(5+0.5), 2*(-2.5+0.07), 0, ''],
[2*(5+0.5), 2*(-2.5-0.07), 0, ''],
[2*(5+1), 2*(-2.5), 0, ''],
[2*(5+1.5), 2*(-2.5+0.07), 0, ''],
[2*(5+1.5), 2*(-2.5-0.07), 0, ''],
[2*(5+2), 2*(-2.5), 0, ''],
[2*(5+2.5), 2*(-2.5+0.07), 0, ''],
[2*(5+2.5), 2*(-2.5-0.07), 0, ''],
[2*(5+3), 2*(-2.5), 0, ''],
[2*(5+3.5), 2*(-2.5+0.07), 0, ''],
[2*(5+3.5), 2*(-2.5-0.07), 0, ''],
[2*(5+4), 2*(-2.5), 0, ''],
[2*(5+4.5), 2*(-2.5+0.07), 0, ''],
[2*(5+4.5), 2*(-2.5-0.07), 0, '']]);

chains.push(
[[2*(2.5+0.07), 2*(-2.15/6), 0, ''],
[2*(2.5-0.07), 2*(-2.15/6), 0, ''],
[2*(2.5), 2*(-4.3/6), 0, ''],
[2*(2.5+0.07), 2*(-6.45/6), 0, ''],
[2*(2.5-0.07), 2*(-6.45/6), 0, ''],
[2*(2.5), 2*(-8.6/6), 0, ''],
[2*(2.5+0.07), 2*(-10.75/6), 0, ''],
[2*(2.5-0.07), 2*(-10.75/6), 0, '']]);

chains.push(
[[2*(2.5+0.07), 2*(2.15/6), 0, ''],
[2*(2.5-0.07), 2*(2.15/6), 0, ''],
[2*(2.5), 2*(4.3/6), 0, ''],
[2*(2.5+0.07), 2*(6.45/6), 0, ''],
[2*(2.5-0.07), 2*(6.45/6), 0, ''],
[2*(2.5), 2*(8.6/6), 0, ''],
[2*(2.5+0.07), 2*(10.75/6), 0, ''],
[2*(2.5-0.07), 2*(10.75/6), 0, '']]);

chains.push(
[[2*(2.5+2.3/6), 2*(0.07), 0, ''],
[2*(2.5+2.3/6), 2*(-0.07), 0, ''],
[2*(2.5+4.6/6), 2*(0), 0, ''],
[2*(2.5+6.9/6), 2*(0.07), 0, ''],
[2*(2.5+6.9/6), 2*(-0.07), 0, ''],
[2*(2.5+9.2/6), 2*(0), 0, ''],
[2*(2.5+11.5/6), 2*(0.07), 0, ''],
[2*(2.5+11.5/6), 2*(-0.07), 0, '']]);

chains.push(
[[2*(5+0.07), 2*(2.5-2.15/6), 0, ''],
[2*(5-0.07), 2*(2.5-2.15/6), 0, ''],
[2*(5), 2*(2.5-4.3/6), 0, ''],
[2*(5+0.07), 2*(2.5-6.45/6), 0, ''],
[2*(5-0.07), 2*(2.5-6.45/6), 0, ''],
[2*(5), 2*(2.5-8.6/6), 0, ''],
[2*(5+0.07), 2*(2.5-10.75/6), 0, ''],
[2*(5-0.07), 2*(2.5-10.75/6), 0, '']]);

chains.push(
[[2*(5-2.3/6), 2*(2.5+0.07), 0, ''],
[2*(5-2.3/6), 2*(2.5-0.07), 0, ''],
[2*(5-4.6/6), 2*(2.5), 0, ''],
[2*(5-6.9/6), 2*(2.5+0.07), 0, ''],
[2*(5-6.9/6), 2*(2.5-0.07), 0, ''],
[2*(5-9.2/6), 2*(2.5), 0, ''],
[2*(5-11.5/6), 2*(2.5+0.07), 0, ''],
[2*(5-11.5/6), 2*(2.5-0.07), 0, '']]);

chains.push(
[[2*(5+2.3/6), 2*(2.5+0.07), 0, ''],
[2*(5+2.3/6), 2*(2.5-0.07), 0, ''],
[2*(5+4.6/6), 2*(2.5), 0, ''],
[2*(5+6.9/6), 2*(2.5+0.07), 0, ''],
[2*(5+6.9/6), 2*(2.5-0.07), 0, ''],
[2*(5+9.1/6), 2*(2.5), 0, ''],
[2*(5+11.4/6), 2*(2.5+0.07), 0, ''],
[2*(5+11.4/6), 2*(2.5-0.07), 0, '']]);

chains.push(
[[2*(7.5-2.3/6), 2*(0.07), 0, ''],
[2*(7.5-2.3/6), 2*(-0.07), 0, ''],
[2*(7.5-4.6/6), 2*(0), 0, ''],
[2*(7.5-6.9/6), 2*(0.07), 0, ''],
[2*(7.5-6.9/6), 2*(-0.07), 0, ''],
[2*(7.5-9.2/6), 2*(0), 0, ''],
[2*(7.5-11.5/6), 2*(0.07), 0, ''],
[2*(7.5-11.5/6), 2*(-0.07), 0, '']]);

chains.push(
[[2*(7.5+0.07), 2*(2.15/6), 0, ''],
[2*(7.5-0.07), 2*(2.15/6), 0, ''],
[2*(7.5), 2*(4.3/6), 0, ''],
[2*(7.5+0.07), 2*(6.45/6), 0, ''],
[2*(7.5-0.07), 2*(6.45/6), 0, ''],
[2*(7.5), 2*(8.6/6), 0, ''],
[2*(7.5+0.07), 2*(10.75/6), 0, ''],
[2*(7.5-0.07), 2*(10.75/6), 0, '']]);

chains.push(
[[2*(7.5+2.3/6), 2*(0.07), 0, ''],
[2*(7.5+2.3/6), 2*(-0.07), 0, ''],
[2*(7.5+4.6/6), 2*(0), 0, ''],
[2*(7.5+6.9/6), 2*(0.07), 0, ''],
[2*(7.5+6.9/6), 2*(-0.07), 0, ''],
[2*(7.5+9.2/6), 2*(0), 0, ''],
[2*(7.5+11.5/6), 2*(0.07), 0, ''],
[2*(7.5+11.5/6), 2*(-0.07), 0, '']]);

chains.push(
[[2*(12.5-2.3/6), 2*(0.07), 0, ''],
[2*(12.5-2.3/6), 2*(-0.07), 0, ''],
[2*(12.5-4.6/6), 2*(0), 0, ''],
[2*(12.5-6.9/6), 2*(0.07), 0, ''],
[2*(12.5-6.9/6), 2*(-0.07), 0, ''],
[2*(12.5-9.2/6), 2*(0), 0, ''],
[2*(12.5-11.5/6), 2*(0.07), 0, ''],
[2*(12.5-11.5/6), 2*(-0.07), 0, '']]);

chains.push(
[[2*(12.5+0.07), 2*(-5/12), 0, ''],
[2*(12.5-0.07), 2*(-5/12), 0, ''],
[2*(12.5), 2*(-5*2/12), 0, ''],
[2*(12.5+0.07), 2*(-5*3/12), 0, ''],
[2*(12.5-0.07), 2*(-5*3/12), 0, ''],
[2*(12.5), 2*(-5*4/12), 0, ''],
[2*(12.5+0.07), 2*(-5*5/12), 0, ''],
[2*(12.5-0.07), 2*(-5*5/12), 0, ''],
[2*(12.5), 2*(-5*6/12), 0, ''],
[2*(12.5+0.07), 2*(-5*7/12), 0, ''],
[2*(12.5-0.07), 2*(-5*7/12), 0, ''],
[2*(12.5), 2*(-5*8/12), 0, ''],
[2*(12.5+0.07), 2*(-5*9/12), 0, ''],
[2*(12.5-0.07), 2*(-5*9/12), 0, ''],
[2*(12.5), 2*(-5*10/12), 0, ''],
[2*(12.5+0.07), 2*(-5*11/12), 0, ''],
[2*(12.5-0.07), 2*(-5*11/12), 0, '']]);

chains.push(
[[2*(12.5+0.07), 2*(2.5/6), 0, ''],
[2*(12.5-0.07), 2*(2.5/6), 0, ''],
[2*(12.5), 2*(2.5*2/6), 0, ''],
[2*(12.5+0.07), 2*(2.5*3/6), 0, ''],
[2*(12.5-0.07), 2*(2.5*3/6), 0, ''],
[2*(12.5), 2*(2.5*4/6), 0, ''],
[2*(12.5+0.07), 2*(2.5*5/6), 0, ''],
[2*(12.5-0.07), 2*(2.5*5/6), 0, '']]);

chains.push(
[[2*(2.3/6), 2*(2.5+0.07), 0, ''],
[2*(2.3/6), 2*(2.5-0.07), 0, ''],
[2*(2.3*2/6), 2*(2.5), 0, ''],
[2*(2.3*3/6), 2*(2.5+0.07), 0, ''],
[2*(2.3*3/6), 2*(2.5-0.07), 0, ''],
[2*(2.3*4/6), 2*(2.5), 0, ''],
[2*(2.3*5/6), 2*(2.5+0.07), 0, ''],
[2*(2.3*5/6), 2*(2.5-0.07), 0, '']]);

chains.push(
[[2*(4.8/12), 2*(-5+0.07), 0, ''],
[2*(4.8/12), 2*(-5-0.07), 0, ''],
[2*(4.8*2/12), 2*(-5), 0, ''],
[2*(4.8*3/12), 2*(-5+0.07), 0, ''],
[2*(4.8*3/12), 2*(-5-0.07), 0, ''],
[2*(4.8*4/12), 2*(-5), 0, ''],
[2*(4.8*5/12), 2*(-5+0.07), 0, ''],
[2*(4.8*5/12), 2*(-5-0.07), 0, ''],
[2*(4.8*6/12), 2*(-5), 0, ''],
[2*(4.8*7/12), 2*(-5+0.07), 0, ''],
[2*(4.8*7/12), 2*(-5-0.07), 0, ''],
[2*(4.8*8/12), 2*(-5), 0, ''],
[2*(4.8*9/12), 2*(-5+0.07), 0, ''],
[2*(4.8*9/12), 2*(-5-0.07), 0, ''],
[2*(4.8*10/12), 2*(-5), 0, ''],
[2*(4.8*11/12), 2*(-5+0.07), 0, ''],
[2*(4.8*11/12), 2*(-5-0.07), 0, '']]);

chains.push(
[[2*(10.07), 2*(-2.5+2.15/6), 0, ''],
[2*(10-0.07), 2*(-2.5+2.15/6), 0, ''],
[2*(10), 2*(-2.5+2.15*2/6), 0, ''],
[2*(10.07), 2*(-2.5+2.15*3/6), 0, ''],
[2*(10-0.07), 2*(-2.5+2.15*3/6), 0, ''],
[2*(10), 2*(-2.5+2.15*4/6), 0, ''],
[2*(10.07), 2*(-2.5+2.15*5/6), 0, ''],
[2*(10-0.07), 2*(-2.5+2.15*5/6), 0, '']]);

chains.push(
[[2*(12.5-7.3/18), 2*(-5+0.07), 0, ''],
[2*(12.5-7.3/18), 2*(-5-0.07), 0, ''],
[2*(12.5-7.3*2/18), 2*(-5), 0, ''],
[2*(12.5-7.3*3/18), 2*(-5+0.07), 0, ''],
[2*(12.5-7.3*3/18), 2*(-5-0.07), 0, ''],
[2*(12.5-7.3*4/18), 2*(-5), 0, ''],
[2*(12.5-7.3*5/18), 2*(-5+0.07), 0, ''],
[2*(12.5-7.3*5/18), 2*(-5-0.07), 0, ''],
[2*(12.5-7.3*6/18), 2*(-5), 0, ''],
[2*(12.5-7.3*7/18), 2*(-5+0.07), 0, ''],
[2*(12.5-7.3*7/18), 2*(-5-0.07), 0, ''],
[2*(12.5-7.3*8/18), 2*(-5), 0, ''],
[2*(12.5-7.3*9/18), 2*(-5+0.07), 0, ''],
[2*(12.5-7.3*9/18), 2*(-5-0.07), 0, ''],
[2*(12.5-7.3*10/18), 2*(-5), 0, ''],
[2*(12.5-7.3*11/18), 2*(-5+0.07), 0, ''],
[2*(12.5-7.3*11/18), 2*(-5-0.07), 0, ''],
[2*(12.5-7.3*12/18), 2*(-5), 0, ''],
[2*(12.5-7.3*13/18), 2*(-5+0.07), 0, ''],
[2*(12.5-7.3*13/18), 2*(-5-0.07), 0, ''],
[2*(12.5-7.3*14/18), 2*(-5), 0, ''],
[2*(12.5-7.3*15/18), 2*(-5+0.07), 0, ''],
[2*(12.5-7.3*15/18), 2*(-5-0.07), 0, ''],
[2*(12.5-7.3*16/18), 2*(-5), 0, ''],
[2*(12.5-7.3*17/18), 2*(-5+0.07), 0, ''],
[2*(12.5-7.3*17/18), 2*(-5-0.07), 0, '']]);

chains.push(
[[2*(12.5-4.8/12), 2*(2.5+0.07), 0, ''],
[2*(12.5-4.8/12), 2*(2.5-0.07), 0, ''],
[2*(12.5-4.8*2/12), 2*(2.5), 0, ''],
[2*(12.5-4.8*3/12), 2*(2.5+0.07), 0, ''],
[2*(12.5-4.8*3/12), 2*(2.5-0.07), 0, ''],
[2*(12.5-4.8*4/12), 2*(2.5), 0, ''],
[2*(12.5-4.8*5/12), 2*(2.5+0.07), 0, ''],
[2*(12.5-4.8*5/12), 2*(2.5-0.07), 0, ''],
[2*(12.5-4.8*6/12), 2*(2.5), 0, ''],
[2*(12.5-4.8*7/12), 2*(2.5+0.07), 0, ''],
[2*(12.5-4.8*7/12), 2*(2.5-0.07), 0, ''],
[2*(12.5-4.8*8/12), 2*(2.5), 0, ''],
[2*(12.5-4.8*9/12), 2*(2.5+0.07), 0, ''],
[2*(12.5-4.8*9/12), 2*(2.5-0.07), 0, ''],
[2*(12.5-4.8*10/12), 2*(2.5), 0, ''],
[2*(12.5-4.8*11/12), 2*(2.5+0.07), 0, ''],
[2*(12.5-4.8*11/12), 2*(2.5-0.07), 0, '']]);

for (let i = 0; i < chains.length; i++){
    series9 = series9.concat(createNodeSeries("chain", "scatter3D", chains[i], 7, 'blue', [], false))
}