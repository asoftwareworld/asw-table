import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tableComponent } from './table.component';

describe('tableComponent', () => {
  let component: tableComponent;
  let fixture: ComponentFixture<tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
