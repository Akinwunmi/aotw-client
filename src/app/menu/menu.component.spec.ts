// Copyright 2022,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  function setup(): void {
    fixture.detectChanges();
  }

  it('should create', () => {
    setup();

    expect(component).toBeTruthy();
  });

  it('should close when clicking outside', () => {
    const spyDocumentClick = spyOn(component, 'hideMenuOnClickOutside').and.callThrough();
    // spyOn(component.showMenuChange, 'emit');
    component.showMenu = false;
    setup();

    // TODO: Fix unit test
    // Problem to tackle: Detect click on mocked btn-menu and check if outside component
    document.dispatchEvent(new MouseEvent('click'));
    const mockBtnMenu = document.createElement('button');
    mockBtnMenu.classList.add('btn-menu', 'icn-menu');
    // mockBtnMenu.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();

    expect(spyDocumentClick).toHaveBeenCalled();
    expect(component.showMenu).toEqual(true);
    // expect(component.showMenuChange.emit).toHaveBeenCalled();
  });
});
