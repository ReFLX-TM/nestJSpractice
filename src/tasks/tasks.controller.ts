import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/createTask.dto";
import { UpdateTaskDto } from "./dto/updateTask.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller('/tasks')
export class TaskController {

    constructor(private tasksService:TasksService) {}

    @Get()
    @ApiOperation({ summary: 'Obtener todas las tareas' })
    @ApiResponse({ status: 200, description: 'Devuelve todas las tareas' })
    @ApiResponse({ status: 401, description: 'No se ha proporcionado un token' })
    getAllTasks() {
        return this.tasksService.getTasks()
    }

    @Get("/:id")
    @ApiOperation({ summary: 'Obtener una tarea por su id' })
    getTask(@Param('id') id: string) {
        const taskFound = this.tasksService.getTask(parseInt(id))

        if (!taskFound) {
            return new NotFoundException('La tarea con ese id no fue encontrada')
        }

        return taskFound
    }

    @Post()
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