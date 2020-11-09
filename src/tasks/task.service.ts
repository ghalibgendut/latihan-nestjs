import { Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "./task.model";
import { v1 as uuid } from "uuid";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TaskService {
    private task: Task [] = []

    getAllTask(): Task [] {
        return this.task
    }

    getTaskByID(id: string): Task {
        return this.task.find(task => task.id == id)
    }

    createTask(create: CreateTaskDto) {
        const {title, description} = create

        const tasks : Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }

        this.task.push(tasks)
        return tasks
    }
}