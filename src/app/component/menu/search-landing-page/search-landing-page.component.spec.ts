import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLandingPageComponent } from './search-landing-page.component';

describe('SearchLandingPageComponent', () => {
  let component: SearchLandingPageComponent;
  let fixture: ComponentFixture<SearchLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
