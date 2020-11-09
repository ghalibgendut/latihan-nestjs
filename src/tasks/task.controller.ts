import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { Task } from "./task.model";
import { TaskService } from "./task.service";

@Controller('tasks')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get()
    findAll(): Task[]{
        return this.taskService.getAllTask()
    }

    @Get('/:id')
    findOne(@Param('id') id : string): Task {
        return this.taskService.getTaskByID(id)
    }

    @Post()
    create(@Body() createTask: CreateTaskDto){
        return this.taskService.createTask(createTask)
    }
}