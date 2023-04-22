import { Chart, scales } from "chart.js/auto";
export {StatsUI};
export {JanuarBar, FebruarChart, MarchChart};

var JanuarBar;
var FebruarChart;
var MarchChart;
Chart.defaults.color = '#ffffff';
Chart.defaults.font.size = window.innerWidth / 100;
Chart.defaults.font.weight = '800';
//Chart January
(async function() {
  const data = [
    { week: 1, hours: 25 },
      { week: 2, hours: 35 },
      { week: 3, hours: 60 },
      { week: 4, hours: 45 }
   
  ];
  const piedata = {
    labels: [
      'Tasks uncompleted',
      'Tasks completed',
        
    ],
    
    datasets: [{
      label: 'Tasks',
      data: [300, 50],
      backgroundColor: [
        '#E30606',
        '#07B7DE',
        
      ],
      hoverOffset: 4,
      
    }],

    
    
  };

  const config = {
    type: 'doughnut',
    data: piedata,

    options: {
      plugins: {

        legend: {
          position: 'bottom',
          display: false,

          labels: {
            

            font: {
              size: window.innerWidth / 100
            }
          }
          
        }
      },
      scales:{
        
      },

    }
  }

  JanuarBar = new Chart(
    document.getElementById('januarychart'),
   
    {
      type: 'bar',
      data: {
        labels: ["1", "2", "3", "4"],
        datasets: [
          {
            
            data: data,
            backgroundColor: '#FFFF',
            
          }
        ]
      },
      options: {

          responsive: true,
          maintainAspectRatio: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false,
                  
                  },
                  tooltip: {
                      enabled: false
                     },
                 
              },
          scales: {
              y: {
                  position: "right",
                  
                grid: {
                  color: '#FFFF',
                  lineWidth: 0.5
                  
                },
                border: {
                  display: false
                },
                
                  ticks: {
                    
                    padding: 20,

                    
                      color: '#FFFF'
                      
                  },
                
                  
              },
              x: {
                
               

                grid: {

                  display: false,
                  color: '#FFFF'
                }
              },
              yAxes: {
                
                  display: false
                  
                  
                  
              },
             
          }
              
          }
      }
    
  );
   new Chart(
    document.getElementById('januaryfreetime'),
    config
  )
})();






//Chart February
 (async function() {
  const data = [
    { week: 1, hours: 52},
    { week: 2, hours: 52},
    { week: 3, hours: 52},
    { week: 4, hours: 52}
   
  ];
  const piedata = {
    labels: [
      'Tasks uncompleted',
      'Tasks completed',
        
    ],
    
    datasets: [{
      label: 'Tasks',
      data: [300, 50],
      backgroundColor: [
        '#E30606',
          '#07B7DE',
        
      ],
      hoverOffset: 4,
      
    }],

    
    
  };

  const config = {
    type: 'doughnut',
    data: piedata,

    options: {
      plugins: {

        legend: {
          position: 'bottom',
          display: false,

          labels: {
            

            font: {
              size: window.innerWidth / 100
            }
          }
          
        }
      },
      scales:{
        
      },

    }
  }

  FebruarChart = new Chart(
    document.getElementById('februarychart'),
    
    {
      type: 'bar',
      data: {
        labels: ["1", "2", "3", "4"],
        datasets: [
          {
            
            data: data.map(row => row.hours),
            backgroundColor: '#FFFF'
          }
        ]
      },
      options: {

          responsive: true,
          maintainAspectRatio: false,
          
          plugins: {
              legend: {
                  display: false,
                  
                  },
                  tooltip: {
                      enabled: false
                     },
                 
              },
          scales: {
              y: {
                  position: "right",
                  
                grid: {
                  color: '#FFFF',
                  lineWidth: 0.5
                  
                },
                border: {
                  display: false
                },
                
                  ticks: {
                    
                    padding: 20,

                    
                      color: '#FFFF'
                      
                  },
                
                  
              },
              x: {
                
               

                grid: {

                  display: false,
                  color: '#FFFF'
                }
              },
              yAxes: {
                
                  display: false
                  
                  
                  
              },
             
          }
              
          }
      }
    
  );
  new Chart(
    document.getElementById('februaryfreetime'),
    config
  );
  
})();
//Chart March
(async function() {
  const data = [
    { week: 1, hours: 52},
    { week: 2, hours: 52},
    { week: 3, hours: 52},
    { week: 4, hours: 52}
   
  ];
  const piedata = {
    labels: [
      'Tasks uncompleted',
      'Tasks completed',
        
    ],
    
    datasets: [{
      label: 'Tasks',
      data: [300, 50],
      backgroundColor: [
        '#E30606',
          '#07B7DE',
        
      ],
      hoverOffset: 4,
      
    }],

    
    
  };

  const config = {
    type: 'doughnut',
    data: piedata,

    options: {
      plugins: {

        legend: {
          position: 'bottom',
          display: false,

          labels: {
            

            font: {
              size: window.innerWidth / 100
            }
          }
          
        }
      },
      scales:{
        
      },

    }
  }

  MarchChart = new Chart(
    document.getElementById('marchchart'),
    
    {
      type: 'bar',
      data: {
        labels: ["1", "2", "3", "4"],
        datasets: [
          {
            
            data: data.map(row => row.hours),
            backgroundColor: '#FFFF'
          }
        ]
      },
      options: {

          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false,
                  
                  },
                  tooltip: {
                      enabled: false
                     },
                 
              },
          scales: {
              y: {
                  position: "right",
                  
                grid: {
                  color: '#FFFF',
                  lineWidth: 0.5
                  
                },
                border: {
                  display: false
                },
                
                  ticks: {
                    
                    padding: 20,

                    
                      color: '#FFFF'
                      
                  },
                
                  
              },
              x: {
                
               

                grid: {

                  display: false,
                  color: '#FFFF'
                }
              },
              yAxes: {
                
                  display: false
                  
                  
                  
              },
             
          }
              
          }
      }
    
  );
  new Chart(
    document.getElementById('marchfreetime'),
    config
  );
})();

let StatsUI = {
    statsButton: document.getElementById('stats'),
    calendarManager: document.getElementById('calendar_managment'),
    statsManager: document.getElementById('statsholder'),
    timeScaleManager: document.getElementById('time_scale'),
    taskMakingButtonHolder: document.getElementById('task_maker'),

  addListeners(){
    console.log("USao u dil");
      this.statsButton.addEventListener('click', (e) => {
      this.calendarManager.classList.add("hidden");
      this.timeScaleManager.classList.add("hidden");
      this.statsManager.classList.remove("hidden");
      this.taskMakingButtonHolder.classList.add("hidden");
      JanuarBar.update('none');
      })
  },

  updateJanuar(a, i){
    
    JanuarBar.data.datasets[0].data[i] += a;
    console.log(JanuarBar.data.datasets[0].data);
    
  },
  updateFebruary(a, i){
    console.log(FebruarChart.data.datasets[0].data);
    FebruarChart.data.datasets[0].data[i] += a;
    
  },

  updateMarc(a, i){
    console.log(MarchChart.data.datasets[0].data);
    MarchChart.data.datasets[0].data[i] += a;

  }

}

StatsUI.addListeners();
