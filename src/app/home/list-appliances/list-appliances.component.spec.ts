import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppliancesComponent } from './list-appliances.component';

describe('ListAppliancesComponent', () => {
  let component: ListAppliancesComponent;
  let fixture: ComponentFixture<ListAppliancesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAppliancesComponent]
    });
    fixture = TestBed.createComponent(ListAppliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
