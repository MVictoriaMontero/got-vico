import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFlagsComponent } from './translate-flags.component';

describe('TranslateFlagsComponent', () => {
  let component: TranslateFlagsComponent;
  let fixture: ComponentFixture<TranslateFlagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateFlagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
