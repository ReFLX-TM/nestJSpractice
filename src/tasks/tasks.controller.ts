import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TaskController {

    constructor(private tasksService:TasksService) {}

    @Get('/')
    getAllTasks() {
        return this.tasksService.getTasks()
    }

    @Post('/')
    createTasks() {
        return "Creando tareas"
    }

    @Put('/')
    updateTasks() {
        return "Actualizando tareas"
    }

    @Delete('/')
    deleteTasks() {
        return "Eliminando tareas"
    }

    @Patch('/')
    updateTasksStatus() {
        return "Actualizando el estado de una tarea"
    }
}