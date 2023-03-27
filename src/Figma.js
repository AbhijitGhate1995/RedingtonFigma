import React,{useState} from "react";
import ReactECharts from 'echarts-for-react';
import {}


export default function RedingtonFigma(){

const [visible,setVIsible] = useState(false);
const [filter,setFilter] = useState(false);
const [selectedYear,setSelectedYear] = useState(null);
const Year =[
  {name : '2022-2023',code : 'NY'},
  {name : '2021-2022',code : 'RM'},
  {name : '2020-2021',code : 'LDN'},
  {name : '2019-2020',code : 'IST'},
];
const [selectedSUB,setSelectedSUB] = useState(null);
const SUB = [
  {name: 'All'},
  {name: 'Cloud'},
  {name: 'L & S'},
  {name : 'Software'},
];
const itemsdemo = [
  {
    icon : 'pi pi-user',
    label : 'Profile',

  },
  {
    icon : 'pi pi-user',
    label : 'logout',
  },
];
const[open,setOpen]=useState(true);

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
        <div>
        <div class="min-h-screen flex fixed">
        <nav class={`grid w-16 flex-none bg-green-900 rounded-r-xl px-2 py-3 mt-1 mb-1 h-screen hover:w-44 group-hover:shadow-xl duration-500 z-10  group-hover:visible delay-150`}>
            <div className='justify-between h-[500px] flex-col justify-between'>
                <img src='../assest/img/Redington (India) 1.png' />
                <div className=''>
                    <button className='flex mt-7 px-2  cursor-pointer text-white origin-left'>
                        <img src='../assest/img/Vector.png' width={"20px"} className='mr-5' /><spn className='absolute opacity-0 invisible group-hover:animate-tooltip_show ml-2'  >Home</spn>
                    </button>
                    <div className='flex mt-4 px-1 cursor-pointer text-white btn btn-bg-gray-900'>
                        <img src='../assest/img/Home.png' width={"30px"} className='mr-4' /><spn className='hidden'>Dashboard</spn>
                    </div>
                </div>
            </div>

            <div className='sidebar-footer'>
                <span className='block mb-5 px-3'>
                    <img src='../assest/img/setting.png' width={"20px"} />
                </span>
                <span className='block px-3'>
                    <img src='../assest/img/export.png' width={"20px"} />
                </span>
            </div>

        </nav>
        
        <header class=" p-0 w-full h-28">
        <div className='flex items-center justify-between px-5'>
            <div className='object-left'>
                <div className='flex lg:flex-1 text-sm'>Dashboard</div>
                <div className='text-xl '>At a Glance</div>
            </div>
            <div className='object-right-top flex item-center p-0 gap-5 items-center'>
                <div className='w-6 h-6 items-center rounded-full bg-gray-200'>
                    <img className='ml-1 mt-1' src='../assest/img/notification.png' />
                </div>
                <div className='flex row center p-0 '>
                    <div className='row flex'>

                        {/* <div className='flex-none'>
                            <div className='text-md flex-none'>
                                Alex Mathew</div>
                            <div className='text-sm'>
                                Reportee</div>
                        </div> */}
                    </div>
                    <Button model={items} severity="secondary" className=' hover:bg-white-900 z-10 h-12' text>
                        <img src='../assest/img/Ellipse 1.png' className='w-auto' />
                        <img src='../assest/img/Frame 36835.png' className='w-auto m-2' />
                        <img src='../assest/img/Arrow.png' />
                    </Button>


                </div>
                <div class="absolute right-0 z-10 w-56 mt-3 origin-top-right bg-white divide-y divide-gray-100 dark:divide-[#333] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#232528] transform opacity-100 scale-100" aria-labelledby="headlessui-menu-button-:r0:" id="headlessui-menu-items-:r2:" role="menu" tabindex="0" data-headlessui-state="open"><div class="py-1" role="none"><a class="text-gray-700 dark:bg-[#232528] dark:text-[#F8F8F8] block px-4 py-2 text-sm" id="headlessui-menu-item-:r3:" role="menuitem" tabindex="-1" data-headlessui-state="" href="/hr/profile"><i class="mr-6 icon-size user_icon"></i> Profile</a></div><div class="py-1" role="none"><a class="text-gray-700 dark:text-[#F8F8F8] dark:bg-[#232528] block px-4 py-2 text-sm cursor-pointer" id="headlessui-menu-item-:r4:" role="menuitem" tabindex="-1" data-headlessui-state="" href="/dashboard"><i class="mr-6 icon-size logout_icon_small"></i> Logout</a></div></div>
            </div>
        </div>
        <div className='flex row justify-between absolute h-14 top-[60px] mx-10'>
            <div className='grid grid-cols-2 flex justify-evenly'>
                <div className='flex justify-between'>
                    <Sidebar visible={filter} position="right" onHide={() => setFilter(false)} className="w-full md:w-20rem lg:w-30rem">
                        <h2>Sidebar</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Sidebar>
                    <a className='' onClick={() => setVisible(true)}  ><img src='./assest/img/_button base.png' /></a>
                    <div className='flex justify-between mx-5'>
                        <div className="flex-1 mt-0 mx-0">
                            <label className='text-sm font-light'>Fiancial Year</label>
                            <Dropdown value={selectedYear} onChange={(e) => setSelectedYear(e.value)} options={Year} optionLabel="name"
                                placeholder="2021-22" className="w-22 md:w-12rem text-sm h-7 items-center m-auto pt-0" />
                        </div>
                        {/* <div className="flex justify-between mx-5"> */}
                        <label className='text-sm font-light'>SUB</label>
                        <Dropdown value={selectedSUB} onChange={(e) => setSelectedSUB(e.value)} options={SUB} optionLabel="name"
                            placeholder="Select a SUB" className="w-22 md:w-12rem text-sm h-7 items-center" />
                        {/* </div> */}
                    </div>
                </div>


                <div className='flex justify-end mt-3'>
                    <Sidebar visible={visible} position="right" onHide={() => setVisible(false)} className="w-full md:w-20rem lg:w-30rem">
                        <h2>Sidebar</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Sidebar>
                    <Button onClick={() => setVisible(true)} severity="secondary" className='bg-surface-900 h-8'>Parent component</Button>
                </div>

            </div>

        </div>  
    </header>

        
        </div>
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

       </div>

         
    )
}
