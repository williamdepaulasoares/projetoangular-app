import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistComponentComponent } from './checklist-component.component';

describe('ChecklistComponentComponent', () => {
  let component: ChecklistComponentComponent;
  let fixture: ComponentFixture<ChecklistComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChecklistComponentComponent]
    });
    fixture = TestBed.createComponent(ChecklistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
