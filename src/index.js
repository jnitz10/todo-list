import { formatDistance, subDays, addDays } from "date-fns";


const todoItem = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
};

const asdf = todoItem('store', 'go to store', 'tuesday', 'urgent');

let myTasks = [];

myTasks.push(asdf);

/*
CODE TO REFACTOR
*/

function addTask() {
    var task = todoItem(
        document.getElementById("taskTitle").value,
        document.getElementById("taskDescription").value,
        document.getElementById("dueDate").value,
        document.getElementById("priority").value
        );
        myTasks.push(task);
}

document.getElementById('addTaskButton').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
})

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
})

document.getElementById('formButton').addEventListener('click', function() {
    addTask();
    console.log(myTasks)
    document.getElementById('taskForm').reset();
});