import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteInputComponent } from './favorite-input.component';

describe('FavoriteInputComponent', () => {
  let component: FavoriteInputComponent;
  let fixture: ComponentFixture<FavoriteInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
