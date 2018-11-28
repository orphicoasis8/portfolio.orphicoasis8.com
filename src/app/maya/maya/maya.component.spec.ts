import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayaComponent } from './maya.component';

describe('MayaComponent', () => {
  let component: MayaComponent;
  let fixture: ComponentFixture<MayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
