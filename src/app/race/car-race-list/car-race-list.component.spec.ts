import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRaceListComponent } from './car-race-list.component';

describe('CarRaceListComponent', () => {
  let component: CarRaceListComponent;
  let fixture: ComponentFixture<CarRaceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRaceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarRaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
