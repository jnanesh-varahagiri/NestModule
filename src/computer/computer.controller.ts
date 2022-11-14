import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
    constructor(private diskservice : DiskService,private cpuservice:CpuService){

    }


    @Get()
    run(){
        return this.cpuservice.compute(10,20)
        return this.diskservice.getData()
       
    }
}
