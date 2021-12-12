export default class Task {
    constructor(name, dueDate = "No date", priority = "3") {
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    setDueDate(date) {
        this.dueDate = date;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    setPriority(priority) {
        this.priority = priority;
    }
}