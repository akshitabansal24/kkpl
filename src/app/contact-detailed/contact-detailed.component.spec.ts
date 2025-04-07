import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailedComponent } from './contact-detailed.component';

describe('ContactDetailedComponent', () => {
  let component: ContactDetailedComponent;
  let fixture: ComponentFixture<ContactDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactDetailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
