import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinDiscordComponent } from './join-discord.component';

describe('JoinDiscordComponent', () => {
  let component: JoinDiscordComponent;
  let fixture: ComponentFixture<JoinDiscordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinDiscordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinDiscordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
