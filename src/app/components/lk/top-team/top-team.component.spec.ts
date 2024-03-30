import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTeamComponent } from './top-team.component';

describe('TopTeamComponent', () => {
  let component: TopTeamComponent;
  let fixture: ComponentFixture<TopTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
