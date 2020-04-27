import { Module } from '@nestjs/common';
import { AuthModule, CategoryModule } from '@modules';

@Module({
  imports: [AuthModule, CategoryModule],
})
export class AppModule {}
