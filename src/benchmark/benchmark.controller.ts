import { Controller, Get } from '@nestjs/common';
import { BenchmarkService } from './benchmark.service';

@Controller('benchmark')
export class BenchmarkController {
  constructor(private readonly benchmarkService: BenchmarkService) {}

  @Get('/orderlines')
  getOrderLines(): object {
    return this.benchmarkService.getOrderLines();
  }

  @Get('/customers')
  getCustomer(): object {
    return this.benchmarkService.getOrderLines();
  }
}
