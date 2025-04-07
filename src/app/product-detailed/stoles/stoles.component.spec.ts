import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StolesComponent } from './stoles.component';

describe('StolesComponent', () => {
  let component: StolesComponent;
  let fixture: ComponentFixture<StolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
