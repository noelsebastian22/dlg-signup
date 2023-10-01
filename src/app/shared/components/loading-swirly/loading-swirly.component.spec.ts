import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSwirlyComponent } from './loading-swirly.component';

describe('LoadingSwirlyComponent', () => {
  let component: LoadingSwirlyComponent;
  let fixture: ComponentFixture<LoadingSwirlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoadingSwirlyComponent],
    });
    fixture = TestBed.createComponent(LoadingSwirlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
