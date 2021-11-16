import { CPU } from "./models/cpu";
import { Memory } from "./models/memory";
import { PersonalComputer } from "./models/personal-computer";
import { PCBuilder } from "./pcbuilder";

export class LaptopBuilder implements PCBuilder {
    private laptop: PersonalComputer

    constructor(){
        this.laptop = new PersonalComputer()
    }

    installPrimaryMemory(memory: Memory): PCBuilder {
        this.laptop.mainMemory = memory
        return this
    }
    
    installSecondaryMemory(memory: Memory): PCBuilder {
        this.laptop.secondaryMemory = memory
        return this
    }

    installCPU(cpu: CPU): PCBuilder {
        this.laptop.cpu = cpu
        return this
    }

    build(): PersonalComputer {
        return this.laptop
    }

    reset(): void {
        this.laptop = new PersonalComputer()
    }
}
