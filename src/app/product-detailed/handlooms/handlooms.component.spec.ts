import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandloomsComponent } from './handlooms.component';

describe('HandloomsComponent', () => {
  let component: HandloomsComponent;
  let fixture: ComponentFixture<HandloomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandloomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandloomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
