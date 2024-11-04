import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('/tasks')
export class TaskController {

    constructor(private tasksService:TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getTasks()
    }

    @Get("/:id")
    getTask(@Param('id') id: string) {
        const taskFound = this.tasksService.getTask(parseInt(id))

        if (!taskFound) {
            return new NotFoundException('La tarea con ese id no fue encontrada')
        }

        return taskFound
    }

    @Post()
    createTasks(@Body() task: any) {
        return this.tasksService.createTasks(task)
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