import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerpageComponent } from './sneakerpage.component';

describe('SneakerpageComponent', () => {
  let component: SneakerpageComponent;
  let fixture: ComponentFixture<SneakerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakerpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
