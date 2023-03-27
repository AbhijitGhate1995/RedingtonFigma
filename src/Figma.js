import React,{useState} from "react";
import ReactECharts from 'echarts-for-react';


export default function RedingtonFigma(){

  // ToolBar 

  const items = [
    {
        label: 'Metrics',
       
    },
    {
        label: 'Business',
        
    },
    {
        label: 'Comparison',
        
    },
    {   label: 'Detailed',
        
    },
    {
      label : 'Projections'
    }
];
    



//  PieChart & BarLine Chart Number 1

  const PieChartdemo1 = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center',
      show:false
  },
  series: [
      {
        type: 'pie',
        radius: ['50', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'center',
          itemStyle:{
            color:"black"
          }
      },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
      },
        labelLine: {
          show: true
      },
        data: [
          { value: 40, name:"38%" , itemStyle : {color : '#E73369'}},
          { value: 60,itemStyle: {color: '#E4E7EC'},},
   
      ]
      }
  ]
  };
    const BarLineChart1 = {
      
        tile :{
            Text  : 'Revenue Trend'
        },
        legend: {
          top: '5%',
          left: 'right',
          show:true
      },
        xAxis : {
            type : 'category',
            data:['FY 19-20','FY 20-21', 'FY 21-22', 'FY 22-23']
        },
       
        yAxis : {
            type : 'value'
        },
        grid:{
            left:"50",
            top:"40",
            bottom:"8"
        },
      
        series: [
          
            {
              itemStyle: {normal: {color: '#526652'}},
                name : 'Revenue',
                data : [2900,3800,3300,2100],
                type : 'bar',
            
            },
            {
              itemStyle: {normal: {color: '#FDB022'}},
                name : 'Trend Line',
                data : [2200,3100,2600,3200],
                type : 'line',
            }
        ] 

    };

    // PieChart & BarLine Chart Number 2

    const PieChartdemo2 = {
      tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          show:false
      },
      series: [
          {
            type: 'pie',
            radius: ['50', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: 'center',
              itemStyle:{
                color:"black"
              }
          },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
          },
            labelLine: {
              show: true
          },
            data: [
              { value: 52, name:"52%" , itemStyle : {color : '#B9B062'}},
              { value: 48,itemStyle: {color: '#E4E7EC'},},
       
          ]
          }
      ]
  
    };
    const BarLineChart2 = {
      
      tile :{
          Text  : 'Margin Trend'
      },
      legend: {
        top: '5%',
        left: 'right',
        show:true
    },
      xAxis : {
          type : 'category',
          data:['FY 19-20','FY 20-21', 'FY 21-22', 'FY 22-23']
      },
     
      yAxis : {
          type : 'value'
      },
      grid:{
          left:"50",
          top:"40",
          bottom:"8"
      },
    
      series: [
        
          {
            itemStyle: {normal: {color: '#526652'}},
              name : 'Margin',
              data : [30,55,90,80],
              type : 'bar',
          
          },
          {
            itemStyle: {normal: {color: '#FDB022'}},
              name : 'Trend Line',
              data : [45,70,50,75],
              type : 'line',
          }
      ] 

  };

  // PieChart & BarLine Chart Number 3

  const PieChartdemo3 = {
    tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center',
        show:false
    },
    series: [
        {
          type: 'pie',
          radius: ['50', '50%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'center',
            itemStyle:{
              color:"black"
            }
        },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
        },
          labelLine: {
            show: true
        },
          data: [
            { value: 80, name:"82%" , itemStyle : {color : '#029046'}},
            { value: 20,itemStyle: {color: '#E4E7EC'},},
     
        ]
        }
    ]

  };
  const BarLineChart3 = {
    
    tile :{
        Text  : 'Expense Trend'
    },
    legend: {
      top: '5%',
      left: 'right',
      show:true
  },
    xAxis : {
        type : 'category',
        data:['FY 19-20','FY 20-21', 'FY 21-22', 'FY 22-23']
    },
   
    yAxis : {
        type : 'value'
    },
    grid:{
        left:"50",
        top:"40",
        bottom:"8"
    },
  
    series: [
      
        {
          itemStyle: {normal: {color: '#978d88'}},
            name : 'Expense',
            data : [7,12,17,13],
            type : 'bar',
        
        },
        {
          itemStyle: {normal: {color: '#FDB022'}},
            name : 'Trend Line',
            data : [9,14,10,14],
            type : 'line',
        }
    ] 

};

// PieChart & BarLine Chart Number 4

const PieChartdemo4 = {
  tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center',
      show:false
  },
  series: [
      {
        type: 'pie',
        radius: ['50', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'center',
          itemStyle:{
            color:"black"
          }
      },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
      },
        labelLine: {
          show: true
      },
        data: [
          { value: 70, name:"70%" , itemStyle : {color : '#b9b062'}},
          { value: 30,itemStyle: {color: '#E4E7EC'},},
   
      ]
      }
  ]

};
const BarLineChart4 = {
  
  tile :{
      Text  : 'Income Trend'
  },
  legend: {
    top: '5%',
    left: 'right',
    show:true
},
  xAxis : {
      type : 'category',
      data:['FY 19-20','FY 20-21', 'FY 21-22', 'FY 22-23']
  },
 
  yAxis : {
      type : 'value'
  },
  grid:{
      left:"50",
      top:"40",
      bottom:"8"
  },

  series: [
    
      {
        itemStyle: {normal: {color: '#978d88'}},
          name : 'Income',
          data : [720,700,800,1000],
          type : 'bar',
      
      },
      {
        itemStyle: {normal: {color: '#FDB022'}},
          name : 'Trend Line',
          data : [780,600,500,500],
          type : 'line',
      }
  ] 

};

// Pie chart & Bar Line Chart number 5


const PieChartdemo5 = {
  tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center',
      show:false
  },
  series: [
      {
        type: 'pie',
        radius: ['50', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'center',
          itemStyle:{
            color:"black"
          }
      },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
      },
        labelLine: {
          show: true
      },
        data: [
          { value: 70, name:"70%" , itemStyle : {color : '#029046'}},
          { value: 30,itemStyle: {color: '#E4E7EC'},},
   
      ]
      }
  ]

};
const BarLineChart5 = {
      
  tile :{
      Text  : 'Profitability Trend'
  },
  legend: {
    top: '5%',
    left: 'right',
    show:true
},
  xAxis : {
      type : 'category',
      data:['FY 19-20','FY 20-21', 'FY 21-22', 'FY 22-23']
  },
 
  yAxis : {
      type : 'value'
  },
  grid:{
      left:"50",
      top:"40",
      bottom:"8"
  },

  series: [
    
      {
        itemStyle: {normal: {color: '#526652'}},
          name : 'Revenue',
          data : [350,550,400,700],
          type : 'bar',
      
      },
      {
        itemStyle: {normal: {color: '#FDB022'}},
          name : 'Trend Line',
          data : [770,540,740,510],
          type : 'line',
      }
  ] 

};
// Horizontal bar & BarLine Chart number 6

    const horizontalChart={
      title: {
        text: 'Working Capital Status'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: [ 'Opening', 'Average', 'Closing']
      },
      series: [
    
        {
          itemStyle: {normal: {color: '#526652'}},
          type: 'bar',
          data: [2500, 4300, 3500]
        },
      ]

    };
    const tripleBar={
      title: {
        text: 'Working Capital Trend'
      },
      grid:{
        left:"60",
        top:"70",
        bottom:"20",
        right:"0"
    },
      legend: {
        top:20
      },
      tooltip: {},
      dataset: {
        source: [
          ['product', 'Opening', 'Closing', 'Average','Trend Line'],
          ['FY 19-20', 900, 1300, 1200,1000],
          ['FY 20-21', 900,1300,1200,1000],
          ['FY 21-22', 900,1300,1200,1000],
          ['Fy 22-23', 900,1300,1200,1000]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [{ type: 'bar' ,itemStyle: {normal: {color: '#029046'}}}, { type: 'bar',itemStyle :{normal : {color:'#E73369'}} }, { type: 'bar', itemStyle:{normal: {color: '#526652'}} },{type : 'line',itemStyle:{normal:{color : '#FDB022'}}}]
    };

    return(
        <div className=" sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-4">

          {/* 1st card of revenue */}
          <div className="flex justify-evenly">
          <div className="flex flex-col h-72 w-1/2 border-2 rounded-md border-gray-400 m-4">
                <div className=" flex flex-row justify-between">
                  <div className="h-1/6  font-bold ml-2">Revenue</div>
                  <div className="font-bold mr-2"></div>
                </div>
                <div className=" flex flex-row h-3/12 gap-2 m-4 sm:grid-cols-1 md:grid-cols-2" >
                    <div className="w-4/12 border-slate-900 border-2 rounded-md ">
                        <div className=" text-sm ml-2"> Gross Sale </div>
                        <div className="text-xl ml-2 flex flex-row"> ₹ 199 Cr 
                        <span className="text-red-500 text-xs ml-2 mt-1"> ▼ 4%</span></div>
                    </div>
                    <div className="w-4/12 border-slate-900 border-2 rounded-md">
                        <div className="ml-2 text-sm"> Revenue </div>
                        <div className="text-xl ml-2 flex flex-row"> ₹ 197 Cr 
                          <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 4%</span>
                        </div>
                    </div>
                    <div className="w-4/12 border-slate-900 border-2 rounded-md">
                        <div className=" ml-2 text-sm"> Revenue/Group </div>
                        <div className="text-xl ml-2 flex flex-row"> ₹ 33 Cr 
                         <span className="text-green-500 text-xs ml-2 content-end mt-1"> ▲ 4%</span>
                        </div>
                    </div>
                </div>
                <div className="grid ">
                        <div className="text-xl ml-2 flex ">Target vs. Actual <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 2%</span></div>                        
                        <div className="flex " style={{width:"500px"}}>
                          <ReactECharts style={{height:"140px",width:"300px"}} option = {PieChartdemo1}/>                        
                          <ReactECharts style={{height:"140px",width:"350px"}} option={BarLineChart1}/> 
                          
                        </div> 
                        </div>
                </div>

            {/* 2nd card of Margin */}
            {/* 2nd card */}

            <div className="flex flex-col h-72 m-4 border-2 rounded-md border-gray-400 w-1/2">
               <div className=" flex flex-row justify-between">
                  <div className="h-1/6  font-bold ml-2">Margin</div>
                  <div className="font-bold mr-2">:</div>
                </div>
                <div className=" flex flex-row h-3/12 gap-2 m-4 md:grid-cols-2" >
                    <div className="w-4/12 border-slate-900 border-2 rounded-md ">
                        <div className=" text-sm ml-2"> GM before Provision </div>
                        <div className="text-xl ml-2 flex flex-row"> ₹ 45 Cr 
                        <span className="text-green-500 text-xs ml-2 mt-1">  ▲ 4%</span></div>
                    </div>
                    <div className="w-4/12 border-slate-900 border-2 rounded-md">
                        <div className="ml-2 text-sm"> GM after Provision </div>
                        <div className="text-xl ml-2 flex flex-row"> ₹ 50 Cr 
                          <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 4%</span>
                        </div>
                    </div>
                    <div className="w-4/12 border-slate-900 border-2 rounded-md">
                        <div className=" ml-2 text-sm"> GM % </div>
                        <div className="text-xl ml-2 flex flex-row"> 4 % 
                         <span className=" text-green-500 text-xs ml-2 content-end mt-1"> ▲ 4%</span>
                        </div>
                    </div>
                </div>
                <div className="grid">
                        <div className="text-xl ml-2 flex ">Target vs. Actual <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 2%</span></div>                        
                        <div className="flex " style={{width:"500px"}}>                          
                        <ReactECharts style={{height:"140px",width:"300px"}} option = {PieChartdemo2}/>
                        <ReactECharts style={{height:"140px",width:"350px"}} option={BarLineChart2}/>                           
                         </div>                         
                </div>
            </div>  
          </div>
          {/* 3rd & 4th Card */}
          <div className="flex justify-evenly">
          <div className="flex flex-col h-72 w-1/2 border-2 rounded-md border-gray-400 m-4">
                <div className=" flex flex-row justify-between">
                  <div className="h-1/6  font-bold ml-2">Cost/Expense</div>
                  <div className="font-bold mr-2">:</div>
                </div>
                <div className=" flex flex-row h-3/12 gap-2 m-4 sm:grid-cols-1 md:grid-cols-2" >
                    <div className="w-4/12 border-slate-900 border-2 rounded-md ">
                        <div className=" text-sm ml-2"> Expense </div>
                        <div className="text-xl ml-2 flex flex-row"> ₹ 17 Cr 
                        <span className="text-red-500 text-xs ml-2 mt-1"> ▲ 4%</span></div>
                    </div>
                    <div className="w-4/12 border-slate-900 border-2 rounded-md">
                        <div className="ml-2 text-sm"> Expense Under Management </div>
                        <div className="text-xl ml-2 flex flex-row"> ₹ 10 Cr 
                          <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 4%</span>
                        </div>
                    </div>
                    <div className="w-4/12 border-slate-900 border-2 rounded-md">
                        <div className=" ml-2 text-sm"> EUM % </div>
                        <div className="text-xl ml-2 flex flex-row"> 59% 
                         <span className="text-green-500 text-xs ml-2 content-end mt-1"> ▲ 4%</span>
                        </div>
                    </div>
                </div>
                <div className="grid ">
                        <div className="text-xl ml-2 flex ">Target vs. Actual <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 2%</span></div>                        
                        <div className="flex " style={{width:"500px"}}>
                          <ReactECharts style={{height:"140px",width:"300px"}} option = {PieChartdemo3}/>                        
                          <ReactECharts style={{height:"140px",width:"350px"}} option={BarLineChart3}/> 
                          
                        </div> 
                        </div>
                </div>

            {/* 4th card of Margin */}

            <div className="flex flex-col h-72 m-4 border-2 rounded-md border-gray-400 w-1/2">
               <div className=" flex flex-row justify-between">
                  <div className="h-1/6  font-bold ml-2"> Income </div>
                  <div className="font-bold mr-2">:</div>
                </div>
                <div className=" flex justify-evenly h-3/12 gap-2 m-4 md:grid-cols-2" >
                    <div className="w-2.4/12 border-slate-900 border-2 rounded-md ">
                        <div className=" text-sm ml-2"> EBIT </div>
                        <div className="text-xl ml-2 flex flex-row"> ₹ 32.6 Cr 
                        <span className="text-green-500 text-xs ml-2 mt-1">  ▲ 4%</span></div>
                    </div>
                    <div className="w-2.4/12 border-slate-900 border-2 rounded-md">
                        <div className="ml-2 text-sm"> EBIT % </div>
                        <div className="text-xl ml-2 flex flex-row"> 4.1%
                          <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 4%</span>
                        </div>
                    </div>
                    <div className="w-2.4/12 border-slate-900 border-2 rounded-md">
                        <div className=" ml-2 text-sm"> EBITDA </div>
                        <div className="text-xl ml-2 flex flex-row">₹ 30 Cr
                         <span className=" text-green-500 text-xs ml-2 content-end mt-1"> ▲ 4%</span>
                        </div>
                    </div>
                    <div className="w-2.4/12 border-slate-900 border-2 rounded-md">
                        <div className="ml-2 text-sm"> EBITDA/ Unit </div>
                        <div className="text-xl ml-2 flex flex-row"> 2.23
                          <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 4%</span>
                        </div>
                    </div>
                    <div className="w-2.4/12 border-slate-900 border-2 rounded-md">
                        <div className="ml-2 text-sm"> EBITDA % </div>
                        <div className="text-xl ml-2 flex flex-row"> 2%
                          <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 1%</span>
                        </div>
                    </div>
                </div>
                <div className="grid">
                        <div className="text-xl ml-2 flex ">Target vs. Actual <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 2%</span></div>                        
                        <div className="flex " style={{width:"500px"}}>                          
                        <ReactECharts style={{height:"140px",width:"300px"}} option = {PieChartdemo4}/>
                        <ReactECharts style={{height:"140px",width:"350px"}} option={BarLineChart4}/>                           
                         </div>                         
                </div>
            </div>  

          </div>

            {/* 5rd & 6th card  */}
            <div className="flex justify-evenly">
          <div className="flex flex-col h-72 w-1/2 border-2 rounded-md border-gray-400 m-4">
                <div className=" flex flex-row justify-between">
                  <div className="h-1/6  font-bold ml-2"> Profitability </div>
                  <div className="font-bold mr-2">:</div>
                </div>
                <div className=" flex flex-row h-3/12 gap-2 m-4 sm:grid-cols-1 md:grid-cols-2" >
                    <div className="w-4/12 border-slate-900 border-2 rounded-md ">
                        <div className=" text-sm ml-2"> PBT </div>
                        <div className="text-xl ml-2 flex flex-row"> ₹ 32.6 Cr 
                        <span className="text-red-500 text-xs ml-2 mt-1"> ▲ 4%</span></div>
                    </div>
                    <div className="w-4/12 border-slate-900 border-2 rounded-md">
                        <div className="ml-2 text-sm"> PAT </div>
                        <div className="text-xl ml-2 flex flex-row"> ₹ 23.8 Cr 
                          <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 4%</span>
                        </div>
                    </div>
                    <div className="w-4/12 border-slate-900 border-2 rounded-md">
                        <div className=" ml-2 text-sm"> PAT % </div>
                        <div className="text-xl ml-2 flex flex-row"> 3.00% 
                         <span className="text-green-500 text-xs ml-2 content-end mt-1"> ▲ 4%</span>
                        </div>
                    </div>
                </div>
                <div className="grid ">
                        <div className="text-xl ml-2 flex ">Target vs. Actual <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 2%</span></div>                        
                        <div className="flex " style={{width:"500px"}}>
                          <ReactECharts style={{height:"140px",width:"300px"}} option = {PieChartdemo5}/>                        
                          <ReactECharts style={{height:"140px",width:"350px"}} option={BarLineChart5}/> 
                          
                        </div> 
                        </div>
                </div>

            {/* 6th card of Margin */}

            <div className="flex flex-col h-72 m-4 border-2 rounded-md border-gray-400 w-1/2">
               <div className=" flex flex-row justify-between">
                  <div className="h-1/6  font-bold ml-2"> Working Capital Trend </div>
                  <div className="font-bold mr-2">:</div>
                </div>
                <div className=" flex justify-evenly h-3/12 gap-2 m-4 md:grid-cols-2" >
                    <div className="w-4/12 border-slate-900 border-2 rounded-md ">
                        <div className=" text-sm ml-2"> WC Turns </div>
                        <div className="text-xl ml-2 flex flex-row"> 15 
                        <span className="text-green-500 text-xs ml-2 mt-1">  ▲ 114%</span></div>
                    </div>
                    <div className="w-4/12 border-slate-900 border-2 rounded-md">
                        <div className="ml-2 text-sm"> ROWC </div>
                        <div className="text-xl ml-2 flex flex-row"> 54
                          <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 30%</span>
                        </div>
                    </div>
                    <div className="w-4/12 border-slate-900 border-2 rounded-md">
                        <div className=" ml-2 text-sm"> WC Days </div>
                        <div className="text-xl ml-2 flex flex-row">25
                         <span className=" text-green-500 text-xs ml-2 content-end mt-1"> ▲ 49%</span>
                        </div>
                    </div>
                </div>
                <div className="grid">                      
                        <div className="flex " style={{width:"500px"}}>                          
                        <ReactECharts style={{height:"140px",width:"300px"}} option={horizontalChart}/>
                        <ReactECharts style={{height:"160px",width:"350px"}} option={tripleBar}/>                           
                         </div>                         
                </div>
            </div>  

          </div>  


        </div>
    )
}
