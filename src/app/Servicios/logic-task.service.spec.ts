import { TestBed } from '@angular/core/testing';

import { LogicTaskService } from './logic-task.service';

describe('LogicTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogicTaskService = TestBed.get(LogicTaskService);
    expect(service).toBeTruthy();
  });
});
