import { CPU } from "./models/cpu";
import { Memory } from "./models/memory";
import { Phone } from "./models/phone";
import { PCBuilder } from "./pcbuilder";

export class PhoneBuilder implements PCBuilder {
    private phone: Phone

    constructor(){
        this.phone = new Phone()
    }

    installPrimaryMemory(memory: Memory): PCBuilder {
        this.phone.cache = memory
        return this
    }
    
    installSecondaryMemory(memory: Memory): PCBuilder {
        this.phone.storage = memory
        return this
    }

    installCPU(cpu: CPU): PCBuilder {
        this.phone.processor = cpu
        return this
    }

    build(): Phone {
        return this.phone
    }

    reset(): void {
        this.phone = new Phone()
    }
}
