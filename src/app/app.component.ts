import { Component } from '@angular/core';
import { Director } from './core/director';
import { LaptopBuilder } from './core/laptop-builder';
import { AMD } from './core/models/amd';
import { HDD } from './core/models/hdd';
import { Intel } from './core/models/intel';
import { RAM } from './core/models/ram';
import { ROM } from './core/models/rom';
import { SSD } from './core/models/ssd';
import { PhoneBuilder } from './core/phone-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // IMPORTANT
  laptopBuilder = new LaptopBuilder()
  phoneBuilder = new PhoneBuilder()
  director = new Director()

  onBuildButtonClick(): void {
    let currBuilder = this.objType == 'laptop' ? this.laptopBuilder : this.phoneBuilder
    if(this.processorBtnValue == 'AMD' && this.mainMemBtnValue == 'RAM' && this.secondaryMemBtnValue == 'SSD'){
      this.director.buildFastAMD(currBuilder)
    }
    else{
      let cpuToInstall = this.processorBtnValue == 'AMD' ? new AMD() : new Intel()
      let mainMemToInstall = this.mainMemBtnValue == 'RAM' ? new RAM() : new ROM()
      let secondaryMemToInstall = this.secondaryMemBtnValue == 'SSD' ? new SSD() : new HDD()

      currBuilder
      .installCPU(cpuToInstall)
      .installPrimaryMemory(mainMemToInstall)
      .installSecondaryMemory(secondaryMemToInstall)
    }
    let finalProduct = currBuilder.build()
    console.log(finalProduct)
    currBuilder.reset()
  }

  // NOT IMPORTANT
  objType: string
  processorBtnValue: string
  mainMemBtnValue: string
  secondaryMemBtnValue: string
}
