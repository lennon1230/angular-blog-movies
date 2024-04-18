import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuButtonCloseComponent } from './menu-button-close.component';

describe('MenuButtonCloseComponent', () => {
  let component: MenuButtonCloseComponent;
  let fixture: ComponentFixture<MenuButtonCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuButtonCloseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuButtonCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
