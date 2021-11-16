import { CPU } from "./cpu";
import { PrimaryMemory } from "./primary-memory";
import { SecondaryMemory } from "./secondary-memory";

export class PersonalComputer {
    mainMemory: PrimaryMemory
    secondaryMemory: SecondaryMemory
    cpu: CPU
}
