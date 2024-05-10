import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BenchmarkModule } from './benchmark/benchmark.module';
import { AppConfigModule } from './config/app/config.module';

@Module({
  imports: [BenchmarkModule, AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
