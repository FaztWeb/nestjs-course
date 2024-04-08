import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TaskController],
  providers: [TasksService],
})
export class TasksModule {}
