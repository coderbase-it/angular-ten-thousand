import {TestBed} from '@angular/core/testing';

import {PalierService} from './palier.service';

describe('PalierService', () => {
    let service: PalierService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PalierService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
