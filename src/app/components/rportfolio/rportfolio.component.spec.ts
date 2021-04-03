import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RportfolioComponent } from './rportfolio.component';

describe('RportfolioComponent', () => {
  let component: RportfolioComponent;
  let fixture: ComponentFixture<RportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RportfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
