import { Chart, scales } from "chart.js/auto";


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
  
    new Chart(
      document.getElementById('januarychart'),
      
      {
        type: 'bar',
        data: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          datasets: [
            {
              
              data: data.map(row => row.hours),
              backgroundColor: '#FFFF'
            }
          ]
        },
        options: {

            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
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
  })();
//Chart February
(async function() {
  const data = [
    { week: 1, hours: 25 },
    { week: 2, hours: 35 },
    { week: 3, hours: 60 },
    { week: 4, hours: 45 }
   
  ];

  new Chart(
    document.getElementById('februarychart'),
    
    {
      type: 'bar',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            
            data: data.map(row => row.hours),
            backgroundColor: '#FFFF'
          }
        ]
      },
      options: {

          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 2,
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
})();
//Chart March
(async function() {
  const data = [
    { week: 1, hours: 25 },
    { week: 2, hours: 35 },
    { week: 3, hours: 60 },
    { week: 4, hours: 45 }
   
  ];

  new Chart(
    document.getElementById('marchchart'),
    
    {
      type: 'bar',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            
            data: data.map(row => row.hours),
            backgroundColor: '#FFFF'
          }
        ]
      },
      options: {

          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 2,
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
})();
   
  
   