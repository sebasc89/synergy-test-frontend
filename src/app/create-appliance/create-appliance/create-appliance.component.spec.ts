import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApplianceComponent } from './create-appliance.component';

describe('CreateApplianceComponent', () => {
  let component: CreateApplianceComponent;
  let fixture: ComponentFixture<CreateApplianceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateApplianceComponent]
    });
    fixture = TestBed.createComponent(CreateApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
