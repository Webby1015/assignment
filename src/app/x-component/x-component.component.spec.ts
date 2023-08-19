import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XComponentComponent } from './x-component.component';

describe('XComponentComponent', () => {
  let component: XComponentComponent;
  let fixture: ComponentFixture<XComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XComponentComponent]
    });
    fixture = TestBed.createComponent(XComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
