import { StatsUI } from "./stats";
import { JanuarBar } from "./stats";
import { FebruarChart } from "./stats";
import { MarchChart } from "./stats";

export {HomePageUI};



let HomePageUI = {

    monthsArray: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    tasksArray: [ 
    [
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ]
    ],
    [ 
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ]
    ],
    [ 
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ]
    ],
    [ 
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ]
    ],
    [ 
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ]
    ],
    [ 
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ]
    ],
    [ 
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ]
    ],
    [ 
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ]
    ],
    [ 
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ]
    ],
    [ 
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ]
    ],
    [ 
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ]
    ],
    [ 
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ],
      [ ]
    ]
  ],

    averageFreeTime: document.querySelectorAll('.freetimeholder'),
    statsButton: document.getElementById('stats'),
    homeButton: document.getElementById('home'),
    calendarManager: document.getElementById('calendar_managment'),
    statsManager: document.getElementById('statsholder'),
    timeScaleManager: document.getElementById('time_scale'),
    taskMakingButtonHolder: document.getElementById('task_maker'),
    addTaskButton: document.getElementById('addtasktext'),
    
    submitTaskAdder: document.getElementById('submit'),
    collapseTaskAdder: document.getElementById('collapse'),
    

    
    elements: [],
    
    addListeners(){

      this.collapseTaskAdder.addEventListener('click', (e) => {
        this.addTaskButton.parentNode.style.height = '2vw';
        this.addTaskButton.classList.remove("hidden");
        
      })

        
      this.addTaskButton.addEventListener('click', (e) => {

        
        this.addTaskButton.parentNode.style.height = 'auto';
        this.addTaskButton.classList.add("hidden");
          
        
      })


      this.submitTaskAdder.addEventListener('click', (e) => {
          
          ServiceProvider.validateInput(document.getElementById('clock-time-start').value, document.getElementById('clock-time-end').value, 
          document.getElementById('name-of-task').value, document.getElementById('name-of-detail1').value, document.getElementById('name-of-detail2').value, 
          document.getElementById('Month').textContent, document.getElementById('Day').textContent)
      })
      
      this.homeButton.addEventListener('click', (e) => {
       
        this.statsManager.classList.add("hidden");
        this.calendarManager.classList.remove("hidden");
        this.timeScaleManager.classList.remove("hidden");
        this.taskMakingButtonHolder.classList.remove("hidden");
      })

      document.getElementById('prevday').addEventListener('click', (e) => {
        if(Number(document.getElementById('Day').textContent) - 1 != 0 ) {
          document.getElementById('Day').textContent = Number(document.getElementById('Day').textContent) - 1;
          console.log("MEEE");
        }
        else {
          document.getElementById('Day').textContent = ServiceProvider.determinDays(document.getElementById('Month').textContent);
        }
        ServiceProvider.ClearGridForNewBorns(document.querySelectorAll('.task-holder'), document.querySelectorAll('.time'), document.querySelectorAll('.task'));
        this.tasksArray[this.monthsArray.indexOf(document.getElementById('Month').textContent)][Number(document.getElementById('Day').textContent) - 1] = [];
        ServiceProvider.updateScriptStorage(this.tasksArray, this.monthsArray, document.getElementById('Month').textContent, document.getElementById('Day').textContent);
        ServiceProvider.updateGridWithSavedData(this.tasksArray,this.monthsArray,  document.getElementById('Month').textContent, document.getElementById('Day').textContent, document.querySelectorAll('.task-holder'));
      });
      document.getElementById('nextday').addEventListener('click', (e) => {
        if(Number(document.getElementById('Day').textContent) != ServiceProvider.determinDays(document.getElementById('Month').textContent)) {
          document.getElementById('Day').textContent = Number(document.getElementById('Day').textContent) + 1;
          console.log("MEEE");
        }
        else {
          document.getElementById('Day').textContent = '1';
        }
        ServiceProvider.ClearGridForNewBorns(document.querySelectorAll('.task-holder'), document.querySelectorAll('.time'), document.querySelectorAll('.task'));
        this.tasksArray[this.monthsArray.indexOf(document.getElementById('Month').textContent)][Number(document.getElementById('Day').textContent) - 1] = [];
        ServiceProvider.updateScriptStorage(this.tasksArray, this.monthsArray, document.getElementById('Month').textContent, document.getElementById('Day').textContent);
        ServiceProvider.updateGridWithSavedData(this.tasksArray,this.monthsArray,  document.getElementById('Month').textContent, document.getElementById('Day').textContent, document.querySelectorAll('.task-holder'));
      });
      document.getElementById('prevmonth').addEventListener('click', (e) => {
        if(this.monthsArray.indexOf(document.getElementById('Month').textContent) != 0) {
          document.getElementById('Month').textContent = this.monthsArray[this.monthsArray.indexOf(document.getElementById('Month').textContent) - 1];
          document.getElementById('Day').textContent = '1';
          console.log("MEEEG");
        }
        else {
          document.getElementById('Month').textContent = this.monthsArray[11];
          document.getElementById('Day').textContent = '1';
        }
        ServiceProvider.ClearGridForNewBorns(document.querySelectorAll('.task-holder'), document.querySelectorAll('.time'), document.querySelectorAll('.task'));
        this.tasksArray[this.monthsArray.indexOf(document.getElementById('Month').textContent)][Number(document.getElementById('Day').textContent) - 1] = [];
        ServiceProvider.updateScriptStorage(this.tasksArray, this.monthsArray, document.getElementById('Month').textContent, document.getElementById('Day').textContent);
        ServiceProvider.updateGridWithSavedData(this.tasksArray,this.monthsArray,  document.getElementById('Month').textContent, document.getElementById('Day').textContent, document.querySelectorAll('.task-holder'));
      });
      document.getElementById('nextmonth').addEventListener('click', (e) => {
        if(this.monthsArray.indexOf(document.getElementById('Month').textContent) != 11) {
          document.getElementById('Month').textContent = this.monthsArray[this.monthsArray.indexOf(document.getElementById('Month').textContent) + 1];
          document.getElementById('Day').textContent = '1';

          console.log("MEEEG");
        }
        else {
          document.getElementById('Month').textContent = this.monthsArray[0];
          document.getElementById('Day').textContent = '1';
        }
        ServiceProvider.ClearGridForNewBorns(document.querySelectorAll('.task-holder'), document.querySelectorAll('.time'), document.querySelectorAll('.task'));
        this.tasksArray[this.monthsArray.indexOf(document.getElementById('Month').textContent)][Number(document.getElementById('Day').textContent) - 1] = [];
        ServiceProvider.updateScriptStorage(this.tasksArray, this.monthsArray, document.getElementById('Month').textContent, document.getElementById('Day').textContent);
        ServiceProvider.updateGridWithSavedData(this.tasksArray,this.monthsArray,  document.getElementById('Month').textContent, document.getElementById('Day').textContent, document.querySelectorAll('.task-holder'));
      });
      

    },

    

    appendTask(TimeStart, TimeEnd, TaskName, TaskDetail1, TaskDetail2, placetoput,timetoremove, Month, Date){

        const task = document.createElement('div');
        task.classList.add('task');
        placetoput[TimeStart].appendChild(task);

        const mark = document.createElement('div');
        mark.classList.add('mark');
        task.appendChild(mark);

        const details = document.createElement('span');
        details.classList.add('details');
        task.appendChild(details);
        HomePageUI.scrollingListeners(task, TimeStart, TimeEnd);

        const taskName = document.createElement('h1');
        taskName.classList.add('taskName');
        taskName.textContent = TaskName;
        details.appendChild(taskName);

        const detail1 = document.createElement('p');
        detail1.classList.add('detail1');
        detail1.textContent = TaskDetail1;
        details.appendChild(detail1);

        const detail2 = document.createElement('p');
        detail2.classList.add('detail1');
        detail2.textContent = TaskDetail2;
        details.appendChild(detail2);
        let i = TimeStart + 1;
        if(TimeEnd - i == 1){
          console.log("Prvi if se desio");
          console.log(i);
          placetoput[TimeStart].style.paddingBottom = '0px';
          placetoput[i].classList.add('hidden');
          timetoremove[i].textContent = '';
          timetoremove[i].classList.add('hidden');


        }
        else if(i != TimeEnd){
          console.log("Drugi if se desio")
          placetoput[TimeStart].style.paddingBottom = '0px';
          
          while (i < TimeEnd){

           /* console.log(i);
            const task = document.createElement('div');
            task.classList.add('task');
            placetoput[i].appendChild(task);
            task.setAttribute("data-connected", "yes");

            placetoput[i].style.border = 'none';
            placetoput[i].style.padding = '0px';
    
            const mark = document.createElement('div');
            mark.classList.add('mark');
            task.appendChild(mark);

            timetoremove[i].textContent = '';

            */
            placetoput[i].classList.add('hidden');
            timetoremove[i].textContent = '';
            timetoremove[i].classList.add('hidden');

            i++;
          }

        }
        ServiceProvider.addToScriptStorage(this.tasksArray, this.monthsArray,{
          Month: Month,
          Date: Number(Date),
          starttime: TimeStart,
          endtime: TimeEnd,
          taskData: task.innerHTML
        }, true);
        
        ServiceProvider.updateLocalStorage(this.tasksArray);
        ServiceProvider.addOneToLocalStorageForWeek(TimeEnd - TimeStart, "-");

    },

     
    
    scrollingListeners(ourholder, timeToStart, timeToEnd){

        let isDown = false;
        let startX;
        let scrollLeft;
        let excolor = ourholder.style.backgroundColor;
        let taskHostlers = document.querySelectorAll('.task-holder');
        let timeHostlers = document.querySelectorAll('.time');
        
        ourholder.addEventListener( 'mousedown', (e) => {
          
          isDown = true;
          startX = e.pageX;
          scrollLeft = ourholder.scrollLeft;
          

        }),
        ourholder.addEventListener('mouseleave', (e) => {
          
          isDown = false;
          ourholder.style.left = 0 + "px";
          ourholder.style.backgroundColor = excolor;

        }),
        ourholder.addEventListener('mouseup', (e) => {
          
          isDown = false;
          let currentPosition = ourholder.style.left.toString().match(/-?\d+/);
          if(currentPosition[0] > 100 || currentPosition[0] < -100){
            
            ourholder.classList.add("fadeAwayAnim");
            ServiceProvider.removeFromScriptStorage(this.tasksArray, this.monthsArray, {
              Month: document.getElementById('Month').textContent,
              Date: Number(document.getElementById('Day').textContent),
              taskData: ourholder.outerHTML
            })
            setTimeout(() => {
              ourholder.remove();
              
              let i = timeToStart;
               console.log(i);
              let b = timeToEnd;
              console.log(b);
              
              while (i < b) {
                    
                    taskHostlers[i].classList.remove('hidden');
                    timeHostlers[i].textContent = timeHostlers[i].dataset.clock;
                    timeHostlers[i].classList.remove('hidden');
                    i++;
              }
            }, 1000);
            if(currentPosition[0] > 100){
              ServiceProvider.addOneToLocalStorageForWeek(timeToEnd - timeToStart, "+");
              
            }
            else {
              ServiceProvider.addOneToLocalStorageForWeek(timeToEnd - timeToStart, "+");
            }
          }
          
          else {
            ourholder.style.left = 0 + "px";
          }

        }),
        ourholder.addEventListener('mousemove', (e) => {
                
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - ourholder.offsetLeft;
                
                const walk = - (x - startX) / 1;
                console.log(ourholder);
                console.log(ourholder.style);
                ourholder.style.position = "relative";
                ourholder.style.left = scrollLeft - walk + "px";

                if(scrollLeft - walk > 100){
                  ourholder.style.backgroundColor = 'rgba(255, 160, 58, 0.41)'
                }
                else if(scrollLeft - walk < -100){
                      ourholder.style.backgroundColor = 'rgba(102, 255, 71, 0.41)'
                }
                else {
                        ourholder.style.backgroundColor = excolor;
                }
        })

    },
    makeElements(dates, tasks) {
      //console.log(this.monthsArray.indexOf("JAN"));
      //console.log(this.tasksArray[this.monthsArray.indexOf("JAN")][0]);
      //console.log(this.tasksArray[this.monthsArray.indexOf("JAN")][0][2].endtime);
      
      
      console.log(this.tasksArray);
      
      const monthHolder = document.createElement('span');
      monthHolder.classList.add("monthholder");
      
      dates.appendChild(monthHolder);

        const monthleftarrow = document.createElement('i');
        monthleftarrow.setAttribute("id", "prevmonth");
        monthleftarrow.classList.add("fa-solid");
        monthleftarrow.classList.add("fa-play");
        monthHolder.appendChild(monthleftarrow);

        const MonthName = document.createElement("h1");
        MonthName.setAttribute("id", "Month");
        MonthName.textContent = "JAN";
        MonthName.setAttribute("data-mm", MonthName.textContent);
        monthHolder.appendChild(MonthName);

        const monthrightarrow = document.createElement('i');
        monthrightarrow.setAttribute("id", "nextmonth");
        monthrightarrow.classList.add("fa-solid");
        monthrightarrow.classList.add("fa-play");
        monthHolder.appendChild(monthrightarrow);

        
        

      const dayholder = document.createElement('span');
      dayholder.classList.add("dayholder");
      dates.appendChild(dayholder);

        const dayleftarrow = document.createElement('i');
        dayleftarrow.setAttribute("id", "prevday");
        dayleftarrow.classList.add("fa-solid");
        dayleftarrow.classList.add("fa-play");
        dayholder.appendChild(dayleftarrow);

        const Date = document.createElement("p");
        Date.setAttribute("id", "Day");
        Date.textContent = "1";
        Date.setAttribute("data-dd", Date.textContent);
        dayholder.appendChild(Date);

        const dayrightarrow = document.createElement('i');
        dayrightarrow.setAttribute("id", "nextday");
        dayrightarrow.classList.add("fa-solid");
        dayrightarrow.classList.add("fa-play");
        dayholder.appendChild(dayrightarrow);

    
        for(let i = 0;  i < 24; i++){

          
            if(i < 10){
              
                const clocktime = document.createElement('div');
                clocktime.classList.add("time");
                clocktime.setAttribute("data-clock", "0" + i + ":00");
                clocktime.textContent = "0" + i + ":00";
                tasks.appendChild(clocktime);

                const taskholder = document.createElement('div');
                taskholder.classList.add("task-holder");
                tasks.appendChild(taskholder);

                

            }
            else {
              
              const clocktime = document.createElement('div');
              clocktime.classList.add("time");
              clocktime.setAttribute("data-clock", i + ":00");
              clocktime.textContent = i + ":00";
              tasks.appendChild(clocktime);

              const taskholder = document.createElement('div');
              taskholder.classList.add("task-holder");
              tasks.appendChild(taskholder);

            }
        }
        
        ServiceProvider.updateScriptStorage(this.tasksArray, this.monthsArray, MonthName.textContent, Date.textContent);
        
        ServiceProvider.updateGridWithSavedData(this.tasksArray,this.monthsArray, MonthName.textContent, Date.textContent, document.querySelectorAll('.task-holder'));
        
    }
    
  }
    
   
    


let ServiceProvider = {

  convertTo24Hour(timeString) {
      
    var timeTokens = timeString.split(":");
    var hours = parseInt(timeTokens[0]);
    var minutes = parseInt(timeTokens[1].substr(0,2));
    var meridian = timeTokens[1].substr(2,2).toUpperCase();
    
    if (meridian === "PM" && hours < 12) {
      hours += 12;
    }
    else if (meridian === "AM" && hours === 12) {
      hours = 0;
    }
    
    return (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes;
  },

  validateInput(TimeStart, TimeEnd, TaskName, TaskDetail1, TaskDetail2, Month, Date){
       
    

    let beginningTime = TimeStart.match(/[1-9]{1,2}/); 
    let endingTime = TimeEnd.match(/[1-9]{1,2}/);
   console.log("Ovo je beginning: " + beginningTime + " a ovo je Time Start: " + TimeStart);
    let taskHolders = document.querySelectorAll('.task-holder');
    let timeHolders = document.querySelectorAll('.time');
    console.log("OVo je beginning time: " + TimeStart.match(/[1-9]{1,2}/));
    console.log("Ovo je ending time " + TimeEnd.match(/[1-9]{1,2}/));
    console.log(taskHolders[2]);
   
    if(endingTime - beginningTime < 1) {
      
      return
    }
    
    else if(taskHolders[beginningTime].hasChildNodes() || taskHolders[Number(beginningTime) + 1].classList.contains('hidden') || taskHolders[Number(endingTime) - 1].classList.contains('hidden') || TimeStart > TimeEnd){
          return;
    }
   
    else {
      console.log("Hej ovo je rez i pusiace se!: " + (endingTime - beginningTime));
      console.log(timeHolders);
      HomePageUI.appendTask(Number(beginningTime), Number(endingTime), TaskName, TaskDetail1, TaskDetail2, taskHolders, timeHolders, Month, Date)
    }

  },
  determinDays(Month){
    if(HomePageUI.monthsArray.indexOf(Month) % 2 != 0){
      console.log(HomePageUI.monthsArray.indexOf(Month) / 2);
      if(Month == 'FEB'){
        return 28;
      }
      return 30;
    }
    else {
      return 31;
    }
  },
  
  updateLocalStorage (a){
    let serailizedStorage = JSON.stringify(a);
    localStorage.setItem("taskstorage", serailizedStorage);
    
    let unserialized = JSON.parse(localStorage.getItem("taskstorage"));
    
  },
  updateScriptStorage(a, b, Month, Date){
    let unserialized = JSON.parse(localStorage.getItem("taskstorage"));
    console.log("Evo odje unserialized");
    if(unserialized != null){
      a[b.indexOf(Month)][Number(Date) - 1] = a[b.indexOf(Month)][Number(Date) - 1].concat(unserialized[b.indexOf(Month)][Number(Date - 1)]);
    }
    
    
  },

  addToScriptStorage(a,b,c, bool){
        a[b.indexOf(c.Month)][Number(c.Date) - 1].push(c);

        
        
  },
  removeFromScriptStorage(a,b,c){
    a[b.indexOf(c.Month)][Number(c.Date) - 1].splice(a[b.indexOf(c.Month)][Number(c.Date) - 1].indexOf(c));
    this.updateLocalStorage(a);
    
  },
  updateGridWithSavedData(a, b, Month, Date, taskHoldersList){
    
   
    let checkThis = a[b.indexOf(Month)][Number(Date) - 1];
    console.log("Zvao si me gospodaru a ovo je ono sto sam ti nasao ")
    console.log(a[b.indexOf(Month)][Number(Date) - 1]);
    let timeHolders = document.querySelectorAll('.time');
    for(let i = 0; i < checkThis.length; i++){
      let h = checkThis[i].starttime + 1;
      console.log("Sta je ovo brate MOJ");
      console.log(h);
      
      let mojsine = document.createElement('div');
      mojsine.classList.add('task');
      
      mojsine.innerHTML = String(checkThis[i].taskData);
      HomePageUI.scrollingListeners(mojsine, checkThis[i].starttime, checkThis[i].endtime);
      console.log("Ovo je moj sin dobar dan tata i tako to");
      console.log(mojsine);
      console.log("Ovo je lista za odstrijel taskHoldersList");
      console.log(taskHoldersList);
      taskHoldersList[checkThis[i].starttime].appendChild(mojsine);
      console.log("Usao sam");

      console.log(checkThis[i].endtime - h);
      console.log("MAJMUNEEEE");
      
        if(checkThis[i].endtime - h == 1){
          
          taskHoldersList[checkThis[i].starttime].style.paddingBottom = '0px';
          taskHoldersList[h].classList.add('hidden');
          timeHolders[h].textContent = '';
          timeHolders[h].classList.add('hidden');


        }
        else if(h != checkThis[i].endtime){
         
          taskHoldersList[checkThis[i].starttime].style.paddingBottom = '0px';
          
          while (h < checkThis[i].endtime){

           
            taskHoldersList[h].classList.add('hidden');
            timeHolders[h].textContent = '';
            timeHolders[h].classList.add('hidden');

            h++;
          }
    }
    h = checkThis.starttime + 1;
  }
  

},
ClearGridForNewBorns(taskhostlers, timehostlers, taskitself){
  
  for(let i = 0;  i < 24; i++){
    
      if(taskitself[i] != undefined){
        taskitself[i].remove();
        console.log(taskitself);
      }

      if(taskhostlers[i].classList.contains('hidden')){
        taskhostlers[i].classList.remove('hidden');
        timehostlers[i].classList.remove('hidden');
        timehostlers[i].textContent = timehostlers[i].dataset.clock;
      }
      

       

     
}
},
 addOneToLocalStorageForWeek(number, operation) {
  const currentDate = Number(document.getElementById('Day').textContent);
  const currentMonth = document.getElementById('Month').textContent;
  
  const currentWeek = Math.ceil((currentDate) / 7);

  let weekToAddTo = null;
  switch (currentWeek) {
    case 1:
      weekToAddTo = "week1";
      break;
    case 2:
      weekToAddTo = "week2";
      break;
    case 3:
      weekToAddTo = "week3";
      break;
    case 4:
      weekToAddTo = "week4";
      break;
    default:
      // Do nothing
      break;
  }

  if (weekToAddTo) {
    const key = `${currentMonth}-${weekToAddTo}`;
    let value;
    if(localStorage.getItem(key) === 'NaN' || localStorage.getItem(key) == null || localStorage.getItem(key) === '0'){
      localStorage.setItem(key, '168');
      value = localStorage.getItem(key);
    }
    else {
       value = localStorage.getItem(key);
    }
    
    
    if(operation === '+'){
      const newValue = parseInt(value, 10);
      console.log(newValue);
      console.log(number);
      console.log("Mekekekekkekeke");
      localStorage.setItem(key, newValue + number);
    }
    else if(operation === '-'){
      
      const newValue = parseInt(value, 10);
      console.log(operation);
      console.log(newValue);
      console.log(number);
      console.log("Mekekekekkekeke 2");
      localStorage.setItem(key, newValue - number);
    }
    const updateValue = localStorage.getItem(key);
    const parsedValue = parseInt(updateValue, 10);

    switch(currentMonth){
      case "JAN":
        console.log(parseInt(localStorage.getItem(key)));
            console.log("Ovo ti je value sine");
        StatsUI.updateJanuar(Number(operation + number), currentWeek - 1);
        break;
      case "FEB":
        StatsUI.updateFebruary(Number(operation + number), currentWeek - 1);
        break;
      case "MAR":
        StatsUI.updateMarc(Number(operation + number), currentWeek - 1);
        break;
    }
    
  }

  
},
updateStatsBackEnd(a, b, c){
          for(let i = 0; i < 4; i++){
            let value;
            let key = "JAN-week" + i.toString();
            if(localStorage.getItem(key) === 'NaN' || localStorage.getItem(key) == null || localStorage.getItem(key) === '0'){
              localStorage.setItem(key, '168');
              value = localStorage.getItem(key);
            }
            else {
              value = localStorage.getItem(key);
           }
            
            a.data.datasets[0].data[i] = parseInt(value, 10);
          }

          for(let i = 0; i < 4; i++){
            let value;
            let key = "FEB-week" + i.toString();
            if(localStorage.getItem(key) === 'NaN' || localStorage.getItem(key) == null || localStorage.getItem(key) === '0'){
              localStorage.setItem(key, '168');
              value = localStorage.getItem(key);
            }
            else {
              value = localStorage.getItem(key);
           }
           
            b.data.datasets[0].data[i] = parseInt(value, 10);
          }

          for(let i = 0; i < 4; i++){
            let value;
            let key = "MAR-week" + i.toString();
            if(localStorage.getItem(key) === 'NaN' || localStorage.getItem(key) == null || localStorage.getItem(key) === '0'){
              localStorage.setItem(key, '168');
              value = localStorage.getItem(key);
            }
            else {
              value = localStorage.getItem(key);
           }
           
            c.data.datasets[0].data[i] = parseInt(value, 10);
          }
}


  
}

ServiceProvider.updateStatsBackEnd(JanuarBar, FebruarChart, MarchChart);
StatsUI.updateAverages();