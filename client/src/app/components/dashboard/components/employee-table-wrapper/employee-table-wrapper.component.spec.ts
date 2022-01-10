import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTableWrapperComponent } from './employee-table-wrapper.component';

describe('EmployeeTableWrapperComponent', () => {
  let component: EmployeeTableWrapperComponent;
  let fixture: ComponentFixture<EmployeeTableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTableWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
