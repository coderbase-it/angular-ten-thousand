import {TestBed} from '@angular/core/testing';

import {PreviousGameGuard} from './previous-game.guard';

describe('PreviousGameGuard', () => {
    let guard: PreviousGameGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(PreviousGameGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
