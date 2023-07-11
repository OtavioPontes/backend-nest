import { Module } from '@nestjs/common';
import { ThingsService } from './things.service';
import { ThingsController } from './things.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [ThingsController],
  providers: [ThingsService],
  imports: [CommonModule],
})
export class ThingsModule {}
