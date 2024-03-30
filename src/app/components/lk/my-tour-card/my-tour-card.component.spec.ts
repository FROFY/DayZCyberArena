import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTourCardComponent } from './my-tour-card.component';

describe('MyTourCardComponent', () => {
  let component: MyTourCardComponent;
  let fixture: ComponentFixture<MyTourCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTourCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTourCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
