import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/createTask.dto";
import { UpdateTaskDto } from "./dto/updateTask.dto";

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
    @UsePipes(new ValidationPipe())
    createTasks(@Body() task: CreateTaskDto) {
        return this.tasksService.createTasks(task)
    }

    @Put()
    updateTasks(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTasks(task)
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