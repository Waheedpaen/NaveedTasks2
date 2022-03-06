import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivedataComponent } from './directivedata.component';

describe('DirectivedataComponent', () => {
  let component: DirectivedataComponent;
  let fixture: ComponentFixture<DirectivedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
