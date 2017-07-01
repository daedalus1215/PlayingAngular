import { Component, OnInit } from '@angular/core';
import { ManualService } from '../manual-service/manual.service';


@Component({
    selector: 'manual-component',
    templateUrl: './manual-component.html'    
})


export class ManualComponent{
    manuals;
    title = 'Manual Component: ';
    
    constructor(manualService : ManualService) {
        this.manuals = manualService.getManuals();
    }
}