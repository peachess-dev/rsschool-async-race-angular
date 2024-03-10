import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineControlComponent } from './engine-control.component';

describe('EngineControlComponent', () => {
  let component: EngineControlComponent;
  let fixture: ComponentFixture<EngineControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EngineControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
