import { Module } from "@nestjs/common";
// import {  } from "./task.controller";
import { TaskService } from "./task.service";

@Module({
    controllers: [],
    providers: [TaskService]
})

export class TaskModule {}