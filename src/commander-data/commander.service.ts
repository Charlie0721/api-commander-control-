import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommanderData } from './commander.entity';
import { CreateCommanderDataDTO } from './dto/create-commander-controller.dto';
import { UpdateCommanderDataDTO } from './dto/update-commander-controller.dto';


@Injectable()
export class CommanderService {

    constructor(@InjectRepository(CommanderData) private commanderRepository: Repository<CommanderData>) { }

    async senData(commander: CreateCommanderDataDTO) {


        const nitFound = await this.commanderRepository.findOne({
            where: {
                nit: commander.nit
            }
        })
        if (nitFound) {
            return new HttpException('El nit que está intentando ingresar ya existe', HttpStatus.CONFLICT)
        }

        const newCommander = this.commanderRepository.create(commander)
        return this.commanderRepository.save(newCommander)
    }

    getData() {
        return this.commanderRepository.find()
    }

    async getUniqueDataByNit(nit: string) {


        const nitFound = await this.commanderRepository.findOne({
            where: { nit }
        })
        if (!nitFound) {
            return new HttpException('nit no encontrado', HttpStatus.NOT_FOUND)
        }

        return nitFound

    }

    async updateData(nit: string, data: UpdateCommanderDataDTO) {

        const nitFound = await this.commanderRepository.findOne({
            where: { nit }
        })
        if (!nitFound) {
            return new HttpException('nit no encontrado', HttpStatus.NOT_FOUND)
        }
        const updateData = Object.assign(nitFound, data)
        return this.commanderRepository.save(updateData)

    }
}
