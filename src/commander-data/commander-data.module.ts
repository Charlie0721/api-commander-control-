import { Module } from '@nestjs/common';
import { CommanderController } from '../commander-data/commander.controller';
import { CommanderService } from '../commander-data/commander.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommanderData } from './commander.entity';
@Module({
    imports: [TypeOrmModule.forFeature([CommanderData])],
    controllers: [CommanderController],
    providers: [CommanderService],
})
export class CommanderDataModule { }
