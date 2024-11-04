import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('/tasks')
export class TaskController {

    constructor(private tasksService:TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getTasks()
    }

    @Post()
    createTasks() {
        return this.tasksService.createTasks()
    }

    @Put()
    updateTasks() {
        return this.tasksService.updateTasks()
    }

    @Delete()
    deleteTasks() {
        return this.tasksService.deleteTasks()
    }

    @Patch()
    updateTasksStatus() {
        return this.tasksService.updateTasksStatus()
    }
}