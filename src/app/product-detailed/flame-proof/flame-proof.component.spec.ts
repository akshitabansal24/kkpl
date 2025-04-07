import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlameProofComponent } from './flame-proof.component';

describe('FlameProofComponent', () => {
  let component: FlameProofComponent;
  let fixture: ComponentFixture<FlameProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlameProofComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlameProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
