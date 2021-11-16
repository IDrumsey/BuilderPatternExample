import { AMD } from "./models/amd";
import { HDD } from "./models/hdd";
import { Intel } from "./models/intel";
import { RAM } from "./models/ram";
import { ROM } from "./models/rom";
import { SSD } from "./models/ssd";
import { PCBuilder } from "./pcbuilder";

export class Director {
    buildRandom(builder: PCBuilder): void {
        // https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
        let availableCPUBrands = ['AMD', 'Intel']
        let randomCPUBrand = availableCPUBrands[Math.random()*availableCPUBrands.length]
        let cpu = randomCPUBrand == 'AMD' ? new AMD() : new Intel()

        let availableMainMemoryTypes = ['RAM', 'ROM']
        let randomMainMemoryType = availableMainMemoryTypes[Math.random()*availableMainMemoryTypes.length]
        let mainMemory = randomMainMemoryType == 'RAM' ? new RAM() : new ROM()

        let availableSecondaryMemoryTypes = ['SSD', 'HDD']
        let randomSecondaryMemoryType = availableSecondaryMemoryTypes[Math.random()*availableSecondaryMemoryTypes.length]
        let secondaryMemory = randomSecondaryMemoryType == 'SSD' ? new SSD() : new HDD()

        builder.installPrimaryMemory(mainMemory).installPrimaryMemory(secondaryMemory).installCPU(cpu)
    }

    buildFastAMD(builder: PCBuilder): void {
        builder
        .installPrimaryMemory(new RAM())
        .installSecondaryMemory(new SSD())
        .installCPU(new AMD())
    }
}
