import { formatDistance, subDays, addDays } from "date-fns";
import './style.css';
import Task from "./Task";
import Project from "./Project";
import UI from "./UI";



document.addEventListener('DOMContentLoaded', UI.loadPage);
const asdf = new Task("asdf", "tomorrow", "2");
let defaultTasks = new Project("Default");

defaultTasks.addTask(asdf)

/*
CODE TO REFACTOR
*/

function addTask() {
    var task = new Task(
        document.getElementById("taskTitle").value,
        document.getElementById("dueDate").value,
        document.getElementById("priority").value
        );
        defaultTasks.addTask(task);
}

function addProject() {
    var project = new Project(
        document.getElementById("projectName").value
    );
    console.log(project);
}

/*document.querySelector('.addTask').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
})*/

/*document.getElementById('taskFormClose').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
})

document.getElementById('projectFormClose').addEventListener('click', function() {
    document.querySelector('.bg-modal2').style.display = 'none';
})

/*document.getElementById('formButton').addEventListener('click', function() {
    addTask();
    console.log(defaultTasks);
    document.getElementById('taskForm').reset();
});

document.querySelector('.addProject').addEventListener('click', function() {
    document.querySelector('.bg-modal2').style.display = 'flex';
})

document.getElementById('projectFormButton').addEventListener('click', function() {
    addProject();
    document.getElementById('projectForm').reset();
});*/

