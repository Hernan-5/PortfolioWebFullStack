import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioInitComponent } from './portfolio-init.component';

describe('PortfolioInitComponent', () => {
  let component: PortfolioInitComponent;
  let fixture: ComponentFixture<PortfolioInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
