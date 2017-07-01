import {Injectable} from '@angular/core';

@Injectable()
export class ManualService {
    getManuals() : string[] {
        return ['Manual1', 'Manual2', 'Manual3'];
    }
}