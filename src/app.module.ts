import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
/* Controllers */
import { AppController } from './app.controller';
/* Services */
import { AppService } from './app.service';
import { IdeaModule } from './idea/idea.module';

@Module({
  imports: [TypeOrmModule.forRoot(), IdeaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
