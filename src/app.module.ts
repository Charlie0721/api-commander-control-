import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommanderDataModule } from './commander-data/commander-data.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommanderData } from './commander-data/commander.entity';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfigAsync } from './config/config-db'

@Module({

  imports: [ConfigModule.forRoot({
    envFilePath: '.development.env',
    isGlobal: true
  }),
  TypeOrmModule.forRootAsync(typeOrmConfigAsync), CommanderDataModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
