import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataConsistencyComponent } from './data-consistency.component';

describe('DataConsistencyComponent', () => {
  let component: DataConsistencyComponent;
  let fixture: ComponentFixture<DataConsistencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataConsistencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataConsistencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
