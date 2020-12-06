import { TestBed } from '@angular/core/testing';

import { tableService } from './table.service';

describe('tableService', () => {
  let service: tableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(tableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
