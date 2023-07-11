import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { ThingsModule } from './things/things.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [CategoriesModule, ThingsModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
