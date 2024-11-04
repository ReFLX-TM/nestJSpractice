import { Injectable } from '@nestjs/common';

export interface Task {
    id: Number,
    title: String,
    status: Boolean
}
@Injectable()
export class TasksService {

    private tasks: Task[] = []

    getTasks() {
        return this.tasks
    }

    getTask(id: Number) {
        return this.tasks.find(task => task.id == id)
    }

    createTasks(task: any) {
        console.log(task)
        this.tasks.push({
            id: this.tasks.length + 1,
            ...task
        })
        return task
    }

    updateTasks() {
        return "Actualizando tareas"
    }

    deleteTasks() {
        return "Eliminando tareas"
    }

    updateTasksStatus() {
        return "Actualizando el estado de una tarea"
    }
}
