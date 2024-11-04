import { Injectable } from '@nestjs/common';

export interface User {
    name: String,
    age: Number
}
@Injectable()
export class TasksService {

    getTasks(): User {
        return {
            name: "John",
            age: 12
        }
    }

    createTasks() {
        return "Creando tareas"
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
