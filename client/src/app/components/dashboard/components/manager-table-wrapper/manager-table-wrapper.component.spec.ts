import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTableWrapperComponent } from './manager-table-wrapper.component';

describe('ManagerTableWrapperComponent', () => {
  let component: ManagerTableWrapperComponent;
  let fixture: ComponentFixture<ManagerTableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerTableWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
