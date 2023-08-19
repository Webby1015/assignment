import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPhoneFormComponent } from './dynamic-phone-form.component';

describe('DynamicPhoneFormComponent', () => {
  let component: DynamicPhoneFormComponent;
  let fixture: ComponentFixture<DynamicPhoneFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicPhoneFormComponent]
    });
    fixture = TestBed.createComponent(DynamicPhoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
