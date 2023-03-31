import { Chart, scales } from "chart.js/auto";

Chart.defaults.color = '#ffffff';
Chart.defaults.font.size = 14;
Chart.defaults.font.weight = '800';
(async function() {
    const data = [
      { week: 1, hours: 25 },
      { week: 2, hours: 35 },
      { week: 3, hours: 60 },
      { week: 4, hours: 45 }
     
    ];
  
    new Chart(
      document.getElementById('myfirstchart'),
      
      {
        type: 'bar',
        data: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          datasets: [
            {
              
              data: data.map(row => row.hours),
              backgroundColor: '#f52f2'
            }
          ]
        },
        options: {
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
                    ticks: {
                        color: '#FFFF00'
                        
                    }
                }
            }
                
            }
        }
      
    );
  })();
  
   
  
   