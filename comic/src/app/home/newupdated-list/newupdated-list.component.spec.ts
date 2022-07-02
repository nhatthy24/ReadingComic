import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewupdatedListComponent } from './newupdated-list.component';

describe('NewupdatedListComponent', () => {
  let component: NewupdatedListComponent;
  let fixture: ComponentFixture<NewupdatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewupdatedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewupdatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
