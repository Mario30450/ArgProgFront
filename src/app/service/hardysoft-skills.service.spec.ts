import { TestBed } from '@angular/core/testing';

import { HardysoftSkillsService } from './hardysoft-skills.service';

describe('HardysoftSkillsService', () => {
  let service: HardysoftSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardysoftSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
