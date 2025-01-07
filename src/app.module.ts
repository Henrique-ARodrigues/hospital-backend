import { Module } from '@nestjs/common';
import { RecordModule } from './record/record.module';
import { RecordController } from './record/record.controller';
import { RecordService } from './record/record.service';

@Module({
  imports: [RecordModule],
})
export class AppModule {}
