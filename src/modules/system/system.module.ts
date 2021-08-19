import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [AuthModule, UsersModule, StudentsModule],
  exports: [AuthModule, UsersModule],
})
export class SystemModule {}
