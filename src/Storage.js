import Project from "./Project";

export default class Storage {

    

    static addProject(project) {
        localStorage.setItem(project.getName(), JSON.stringify(project));
        Storage.printStorage();

    }

    static printStorage() {
        for (var i = 0; i < localStorage.length; i++) {
            console.log(localStorage.getItem(localStorage.key(i)));
        }
    }

    static clear() {
        localStorage.clear();
        Storage.initializeStorage();
        Storage.printStorage();
    }

    static initializeStorage() {
        if (localStorage.length === 0) {
            const defaultProject = new Project('Todo');
            localStorage.setItem('Todo', JSON.stringify(defaultProject));

        }
    }

    static getProjectNames() {
        let projectNames = [];
        for (var i = 0; i < localStorage.length; i++) {
            projectNames.push(localStorage.key(i));
        }
        projectNames.sort();
        return projectNames;
    }

    static getProjectTasks(projectKey) {
        var project = JSON.parse(localStorage.getItem(projectKey));
        return project.taskList;
    }

    static addTask(projectKey, task) {
        var project = JSON.parse(localStorage.getItem(projectKey));
        project.taskList.push(task);
        localStorage.setItem(projectKey, JSON.stringify(project));
    }
}