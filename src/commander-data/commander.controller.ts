import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { CommanderData } from './commander.entity';
import { CommanderService } from './commander.service';
import { CreateCommanderDataDTO } from './dto/create-commander-controller.dto';
import { UpdateCommanderDataDTO } from './dto/update-commander-controller.dto';

@Controller('commander')
export class CommanderController {
    constructor(private commanderService: CommanderService) { }

    @Get()
    getData(): Promise<CommanderData[]> {
        return this.commanderService.getData();
    }

    @Get(':nit')
    getUniqueDataByNit(@Param('nit') nit: string) {
        return this.commanderService.getUniqueDataByNit(nit)
    }


    @Post()
    createData(@Body() newData: CreateCommanderDataDTO) {
        return this.commanderService.senData(newData);
    }

    @Patch(':nit')
    updateData(@Param('nit') nit: string, @Body() updateData: UpdateCommanderDataDTO) {
        return this.commanderService.updateData(nit, updateData);

    }


}
