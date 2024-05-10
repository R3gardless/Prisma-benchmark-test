import { Injectable } from '@nestjs/common';
import { CreateBenchmarkDto } from './dto/create-benchmark.dto';
import { UpdateBenchmarkDto } from './dto/update-benchmark.dto';
import { PrismaService } from 'src/config/database/prisma.service';
import { time } from 'console';

@Injectable()
export class BenchmarkService {
  constructor(private readonly prismaService: PrismaService) {}

  async getOrderLines() {
    // Calculate execution time

    const start_time = new Date().getTime();
    const orderlines = await this.prismaService.orderLine.findMany({
      relationLoadStrategy: 'join',
      include: {
        order: {
          include: {
            customer: true,
          },
        },
        stock: true,
      },
    });
    console.log(`Execution time: ${new Date().getTime() - start_time}ms`);

    return orderlines;
  }
}
