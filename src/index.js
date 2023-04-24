import { HomePageUI } from "./home";
import { makeChart } from "./stats";
import { PutTheAverages } from "./stats";
import './css/style.css';
import 'chart.js/auto';

const datemanaging = document.getElementById('calendar_managment');
const taskmanagment = document.getElementById('time_scale');


HomePageUI.makeElements(datemanaging, taskmanagment);
HomePageUI.addListeners();
console.log(HomePageUI.averageFreeTime[0].innerText);