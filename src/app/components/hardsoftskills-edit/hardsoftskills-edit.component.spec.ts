import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardsoftskillsEditComponent } from './hardsoftskills-edit.component';

describe('HardsoftskillsEditComponent', () => {
  let component: HardsoftskillsEditComponent;
  let fixture: ComponentFixture<HardsoftskillsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardsoftskillsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardsoftskillsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
