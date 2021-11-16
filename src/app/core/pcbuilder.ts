import { CPU } from "./models/cpu";
import { PrimaryMemory } from "./models/primary-memory";
import { SecondaryMemory } from "./models/secondary-memory";

export interface PCBuilder {
    installPrimaryMemory(memory: PrimaryMemory): PCBuilder
    installSecondaryMemory(memory: SecondaryMemory): PCBuilder
    installCPU(cpu: CPU): PCBuilder
    
}
