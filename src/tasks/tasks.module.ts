import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { TaskRepository } from './tasks.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TasksService, TaskRepository],
  controllers: [TasksController],
})
export class TasksModule {}
