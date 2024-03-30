import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTeamCardComponent } from './top-team-card.component';

describe('TopTeamCardComponent', () => {
  let component: TopTeamCardComponent;
  let fixture: ComponentFixture<TopTeamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopTeamCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopTeamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
