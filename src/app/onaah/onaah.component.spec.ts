import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnaahComponent } from './onaah.component';

describe('OnaahComponent', () => {
  let component: OnaahComponent;
  let fixture: ComponentFixture<OnaahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnaahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnaahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
