import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmmComponent } from './mmm.component';

describe('MmmComponent', () => {
  let component: MmmComponent;
  let fixture: ComponentFixture<MmmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
