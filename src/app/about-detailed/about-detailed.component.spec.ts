import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDetailedComponent } from './about-detailed.component';

describe('AboutDetailedComponent', () => {
  let component: AboutDetailedComponent;
  let fixture: ComponentFixture<AboutDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDetailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
