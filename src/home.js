export {HomePageUI};

let HomePageUI = {

    averageFreeTime: document.querySelectorAll('.freetimeholder'),
    statsButton: document.getElementById('stats'),
    homeButton: document.getElementById('home'),
    calendarManager: document.getElementById('calendar_managment'),
    statsManager: document.getElementById('statsholder'),
    timeScaleManager: document.getElementById('time_scale'),
    taskMakingButtonHolder: document.getElementById('task_maker'),
    elements: [],
    
    addFunction(){
        
      
      
      this.statsButton.addEventListener('click', (e) => {
            this.calendarManager.classList.add("hidden");
            this.timeScaleManager.classList.add("hidden");
            this.statsManager.classList.remove("hidden");
            this.taskMakingButtonHolder.classList.add("hidden");
      }),
      this.homeButton.addEventListener('click', (e) => {
       
        this.statsManager.classList.add("hidden");
        this.calendarManager.classList.remove("hidden");
        this.timeScaleManager.classList.remove("hidden");
        this.taskMakingButtonHolder.classList.remove("hidden");
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

                const task = document.createElement('div');
                task.classList.add("task");
                taskholder.appendChild(task);

                const mark = document.createElement('div');
                mark.classList.add('mark');
                task.appendChild(mark);

                const details = document.createElement('span');
                details.classList.add('details');
                task.appendChild(details);

                const taskName = document.createElement('h1');
                taskName.classList.add('taskName');
                details.appendChild(taskName);

                const detail1 = document.createElement('p');
                detail1.classList.add('detail1');
                details.appendChild(detail1);

                const detail2 = document.createElement('p');
                detail2.classList.add('detail2');
                details.appendChild(detail2);

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

              const task = document.createElement('div');
              task.classList.add("task");
              taskholder.appendChild(task);

              const mark = document.createElement('div');
              mark.classList.add('mark');
              task.appendChild(mark);

              const details = document.createElement('span');
              details.classList.add('details');
              task.appendChild(details);

              const taskName = document.createElement('h1');
              taskName.classList.add('taskName');
              details.appendChild(taskName);

              const detail1 = document.createElement('p');
              detail1.classList.add('detail1');
              details.appendChild(detail1);

              const detail2 = document.createElement('p');
              detail2.classList.add('detail2');
              details.appendChild(detail2);

            }
        }
        
    
    },
    
   
    
}

