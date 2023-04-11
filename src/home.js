export {HomePageUI};

let HomePageUI = {

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
          document.getElementById('name-of-task').value, document.getElementById('name-of-detail1').value, document.getElementById('name-of-detail2').value)
      })
      
      this.homeButton.addEventListener('click', (e) => {
       
        this.statsManager.classList.add("hidden");
        this.calendarManager.classList.remove("hidden");
        this.timeScaleManager.classList.remove("hidden");
        this.taskMakingButtonHolder.classList.remove("hidden");
      })


    },

    

    appendTask(TimeStart, TimeEnd, TaskName, TaskDetail1, TaskDetail2, placetoput,timetoremove){

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
        if(i != TimeEnd){
          
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


            i++;
          }

        }
        

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
            setTimeout(() => {
              ourholder.remove();
              let i = timeToStart;
               console.log(i);
              let b = timeToEnd;
              console.log(b);
              
              while (i < b) {
                    
                    taskHostlers[i].classList.remove('hidden');
                    timeHostlers[i].textContent = timeHostlers[i].dataset.clock;
                    i++;
              }
            }, 2000);
          }
          
          else {
            ourholder.style.left = 0 + "px";
          }

        }),
        ourholder.addEventListener('mousemove', (e) => {
                
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - ourholder.offsetLeft;
                
                const walk = - (x - startX) / 5;
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
        MonthName.textContent = "MON";
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
        Date.textContent = "15";
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

  validateInput(TimeStart, TimeEnd, TaskName, TaskDetail1, TaskDetail2){
      
    let beginningTime = ServiceProvider.convertTo24Hour(TimeStart).match(/\d+/);
    let endingTime = ServiceProvider.convertTo24Hour(TimeEnd).match(/\d+/);
    let taskHolders = document.querySelectorAll('.task-holder');
    let timeHolders = document.querySelectorAll('.time');
    console.log("OVo je beginning time: " + beginningTime);
    console.log(taskHolders[beginningTime]);
    if(endingTime - beginningTime < 1) {
      console.log("Hej ovo je rez: " + (endingTime - beginningTime));
      return
    }
    
    else if(taskHolders[beginningTime].hasChildNodes()){
          return;
    }
    else {
      console.log("Hej ovo je rez i pusiace se!: " + (endingTime - beginningTime));
      HomePageUI.appendTask(Number(beginningTime), Number(endingTime), TaskName, TaskDetail1, TaskDetail2, taskHolders, timeHolders)
    }

  },

}

