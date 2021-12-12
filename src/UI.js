import './style.css';
import Task from './Task';
import Project from './Project';
import Storage from './Storage';


// TODO: clear projects button removes default todo's tasks, needs fixed

export default class UI {

    static loadPage() {
        UI.taskButtons()
        UI.projectButtons()
        UI.populateProjectList()
        UI.populateTaskList()
    }

    static currentProject = "Todo";

    static defaultProject = "Todo";

    static setCurrentProject(userProject) {
        UI.currentProject = userProject;
    }

    // project pane buttons
    static projectButtons() {
        const addProjectButton = document.querySelector('.addProject');
        const addProjectFormButton = document.getElementById('projectFormButton');
        const closeProjectFormButton = document.getElementById('projectFormClose');
        const clearProjectsButton = document.querySelector('.clearProjects');
        const userProjects = document.querySelectorAll('.project');
        
        
        
        addProjectButton.addEventListener('click', UI.projectModal);
        addProjectFormButton.addEventListener('click', UI.projectFormButton);
        closeProjectFormButton.addEventListener('click', UI.closeProjectModal);
        clearProjectsButton.addEventListener('click', function() {
            var areyousure = confirm("Are you sure?");
            if (areyousure) {
                UI.clearProjects();
            } else {
                return;
            }
        });
        document.querySelector('.projectPane').addEventListener('click', function(e) {
            if (e.target.className == "project") {
                UI.setCurrentProject(e.target.innerHTML);
                console.log(UI.currentProject);
                UI.populateProjectList();
                UI.populateTaskList();
            }
        })

            
        
    }

    static clearProjects() {
        Storage.clear();
        UI.setCurrentProject(UI.defaultProject);
        UI.populateProjectList();

    }

    static projectModal() {
        document.querySelector('.bg-modal2').style.display = 'flex';
    }

    static closeProjectModal() {
        document.querySelector('.bg-modal2').style.display = 'none';
    }

    static projectFormButton() {
        UI.readProjectForm();
        document.getElementById('projectForm').reset();
    }

    static readProjectForm() {
        var project = new Project(
            document.getElementById("projectName").value,
            
        );
        Storage.addProject(project);
        UI.populateProjectList();

    }

    // task pane buttons
    static taskButtons() {
        const addTaskButton = document.querySelector('.addTask');
        const addTaskFormButton = document.getElementById('taskFormButton');
        const closeTaskFormButton = document.getElementById('taskFormClose');
        const projectTasks = document.querySelectorAll('.task');
        
        
        
        addTaskButton.addEventListener('click', UI.taskModal);
        addTaskFormButton.addEventListener('click', UI.taskFormButton);
        closeTaskFormButton.addEventListener('click', UI.closeTaskModal);
        document.querySelector('.taskList').addEventListener('click', function(e) {
            if (e.target.className == "task") {
                UI.populateTaskList(e.target.innerHTML);
                console.log(e.target.innerHTML);
            }
        })
    }

    static taskModal() {
        document.querySelector('.bg-modal').style.display = 'flex';
    }

    static closeTaskModal() {
        document.querySelector('.bg-modal').style.display = 'none';
    }

    static taskFormButton() {
        UI.readTaskForm();
        UI.populateTaskList();
        document.getElementById('taskForm').reset();
    }

    static readTaskForm() {
        var task = new Task(
            document.getElementById("taskTitle").value,
            document.getElementById("dueDate").value,
            document.getElementById("priority").value
        );
        console.log(task);
        Storage.addTask(this.currentProject, task);
    }


    // DOM MANIPULATION 

    static populateProjectList() {
        const projectNameList = Storage.getProjectNames();
        const projectList = document.querySelector('.projectList');

        projectList.innerHTML = '';

        if(UI.currentProject == "Todo") {
            document.getElementById("defaultProject").classList.add('selected');
        } else {
            document.getElementById("defaultProject").classList.remove('selected');
        }

        console.log(projectNameList);
        for (const projectName of projectNameList) {
            if (projectName != 'Todo' && projectName != UI.currentProject) {
                document.querySelector('.projectList').innerHTML +=
                `<span class="project">${projectName}</span><br>`;
            } else if (projectName != 'Todo' && projectName == UI.currentProject) {
                document.querySelector('.projectList').innerHTML +=
                `<span class="project selected">${projectName}</span><br>`;
            }
        }
    }

    static expandTask() {

    }

    static populateTaskList(selectedTask) {
        const taskList = Storage.getProjectTasks(this.currentProject);
        const taskListArea = document.querySelector('.taskList');

        taskListArea.innerHTML = '';
        for (const task of taskList) {
            if (task.name == selectedTask) {
                document.querySelector('.taskList').innerHTML +=
                `<span class="task selected2">${task.name}</span><br>
                <span class="taskDetails selected2">&nbsp;&nbsp;&nbsp;&nbsp;
                Due Date: ${task.dueDate}</span><br>
                <span class="taskDetails selected2">&nbsp;&nbsp;&nbsp;&nbsp;
                Priority: ${task.priority}</span><br>`;
            } else {
                document.querySelector('.taskList').innerHTML +=
                `<span class="task">${task.name}</span><br>`;

            }
            

        }
    }

    
}