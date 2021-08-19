import { Module } from '@nestjs/common';
import { CoreModule } from './core';

import { SystemModule } from './modules';

import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [CoreModule, SystemModule],
})
export class AppModule {}
