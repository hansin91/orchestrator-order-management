import { Module } from '@nestjs/common';
import { AuthModule } from '@modules';

@Module({
  imports: [AuthModule],
})
export class AppModule {}
