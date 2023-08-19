import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YComponentComponent } from './y-component.component';

describe('YComponentComponent', () => {
  let component: YComponentComponent;
  let fixture: ComponentFixture<YComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YComponentComponent]
    });
    fixture = TestBed.createComponent(YComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
