import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakeritemComponent } from './sneakeritem.component';

describe('SneakeritemComponent', () => {
  let component: SneakeritemComponent;
  let fixture: ComponentFixture<SneakeritemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakeritemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakeritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
