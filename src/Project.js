
export default class Project{
    constructor(name) {
        this.name = name;
    }
    taskList = [];

    getTaskList() {
        return this.taskList;
    }

    addTask(task) {
        this.taskList.push(task);
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

}